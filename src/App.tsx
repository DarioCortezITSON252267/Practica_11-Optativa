import { useState } from 'react';
import Catalogo from './Catalogo.tsx';
import Encabezado from './Encabezado.tsx';
import Filtros from './Filtros.tsx';
import Layout from './Layout.tsx';
import PiePagina from './PiePagina.tsx';
import { productos, type Producto } from './datos.ts';

function App() {
  // El estado: sólo lo que cambia y no se puede calcular.
  const [filtro, setFiltro] = useState('todas');
  const [carrito, setCarrito] = useState<Producto[]>([]);

  // Se calculan en cada pintada a partir del estado; no se guardan.
  const visibles = filtro === 'todas' ? productos : productos.filter((p) => p.categoria === filtro);
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);

  function agregar(producto: Producto) {
    // Siempre un arreglo nuevo: con carrito.push() React no se entera del cambio.
    setCarrito((actual) => [...actual, producto]);
  }

  return (
    <Layout
      encabezado={<Encabezado piezas={carrito.length} />}
      pie={<PiePagina piezas={carrito.length} total={total} />}
    >
      <section className="portada">
        <h1>Catálogo de temporada</h1>
        <p>{visibles.length} {visibles.length === 1 ? 'producto' : 'productos'}</p>
      </section>

      <Filtros activa={filtro} onCambiar={setFiltro} />
      <Catalogo productos={visibles} onAgregar={agregar} />
    </Layout>
  );
}

export default App;
