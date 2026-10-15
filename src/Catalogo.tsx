import type { Producto } from './datos.ts';
import TarjetaProducto from './TarjetaProducto.tsx';

interface CatalogoProps {
  productos: Producto[];
  onAgregar: (producto: Producto) => void;
}

function Catalogo({ productos, onAgregar }: CatalogoProps) {
  return (
    <section className="catalogo">
      {productos.map((producto) => (
        <TarjetaProducto key={producto.id} producto={producto} onAgregar={onAgregar} />
      ))}
    </section>
  );
}

export default Catalogo;
