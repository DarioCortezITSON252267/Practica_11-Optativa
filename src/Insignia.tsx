interface InsigniaProps {
  texto: string;
  tipo?: 'info' | 'exito' | 'extra';
}

// `tipo` es opcional: si no llega, vale 'info'.
function Insignia({ texto, tipo = 'info' }: InsigniaProps) {
  return <span className={`insignia insignia--${tipo}`}>{texto}</span>;
}

export default Insignia;
