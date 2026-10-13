// Paso 1: <boton-app>, un botón reutilizable.
// ENTRADAS: los atributos `variante` y `deshabilitado`, y el texto por el <slot>.
import estilos from './boton-app.css?inline';

const variantes = ['primario', 'secundario', 'peligro'];

export class BotonApp extends HTMLElement {
  // Los atributos que el navegador vigila: cuando cambian, llama a attributeChangedCallback.
  static observedAttributes = ['variante', 'deshabilitado'];

  constructor() {
    super();
    const sombra = this.attachShadow({ mode: 'open' });
    sombra.innerHTML = `
      <style>${estilos}</style>
      <button class="primario"><slot></slot></button>
    `;
  }

  attributeChangedCallback() {
    const boton = this.shadowRoot!.querySelector('button')!;
    // Un atributo llega como texto (o null si no está). Si no es una variante conocida, primario.
    const variante = this.getAttribute('variante') ?? '';
    boton.className = variantes.includes(variante) ? variante : 'primario';
    // Un atributo booleano vale por estar presente, no por su valor.
    boton.disabled = this.hasAttribute('deshabilitado');
  }
}

// El nombre de una etiqueta propia debe llevar guion.
customElements.define('boton-app', BotonApp);
