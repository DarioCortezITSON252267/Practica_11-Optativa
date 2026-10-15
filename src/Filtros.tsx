const categorias = ['todas', 'calzado', 'ropa', 'accesorios'];

interface FiltrosProps {
  activa: string;
  onCambiar: (categoria: string) => void;
}

function Filtros({ activa, onCambiar }: FiltrosProps) {
  return (
    <nav className="filtros">
      {categorias.map((c) => (
        <button
          key={c}
          className={c === activa ? 'filtros__boton filtros__boton--activo' : 'filtros__boton'}
          onClick={() => onCambiar(c)}
        >
          {c}
        </button>
      ))}
    </nav>
  );
}

export default Filtros;
