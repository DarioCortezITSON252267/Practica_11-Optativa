// Paso 2: <tarjeta-producto>, que usa por dentro a <boton-app>.
// ENTRADAS: los atributos `id`, `nombre`, `precio`, `imagen` y `existencia`.
// SALIDA:   el evento propio 'agregar', con { id, nombre, precio }.
import './boton-app';
import estilos from './tarjeta-producto.css?inline';
import type { DetalleAgregar } from './tipos';

const pesos = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' });

export class TarjetaProducto extends HTMLElement {
  static observedAttributes = ['nombre', 'precio', 'imagen', 'existencia'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.pintar();
  }

  attributeChangedCallback() {
    // Al crearla, los atributos llegan uno por uno: se pinta hasta que ya está en la página.
    if (this.isConnected) this.pintar();
  }

  private pintar() {
    const nombre = this.getAttribute('nombre') ?? '';
    const imagen = this.getAttribute('imagen') ?? '';
    // Ojo: un atributo llega siempre como texto, hay que convertirlo a número.
    const precio = Number(this.getAttribute('precio'));
    const existencia = Number(this.getAttribute('existencia'));
    const agotado = existencia <= 0;

    this.shadowRoot!.innerHTML = `
      <style>${estilos}</style>
      <article class="tarjeta">
        <img src="${imagen}" alt="${nombre}">
        <div class="cuerpo">
          <h3>${nombre}</h3>
          <p class="precio">${pesos.format(precio)}</p>
          <p class="existencia ${agotado ? 'agotado' : ''}">${agotado ? 'Agotado' : `${existencia} disponibles`}</p>
          <boton-app ${agotado ? 'deshabilitado' : ''}>Agregar al carrito</boton-app>
        </div>
      </article>
    `;

    if (agotado) return;

    this.shadowRoot!.querySelector('boton-app')!.addEventListener('click', () => {
      // bubbles: sube por los ancestros hasta el contenedor de las tarjetas.
      // composed: puede cruzar la frontera de un Shadow DOM (hace falta si la
      // tarjeta vive dentro de otro componente). Si el evento no logra salir,
      // afuera nadie se entera: el contador no se mueve y tampoco hay error.
      this.dispatchEvent(new CustomEvent<DetalleAgregar>('agregar', {
        detail: { id: this.id, nombre, precio },
        bubbles: true,
        composed: true,
      }));
    });
  }
}

customElements.define('tarjeta-producto', TarjetaProducto);
