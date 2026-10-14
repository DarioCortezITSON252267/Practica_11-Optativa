import Saludo from './Saludo.tsx';
import TarjetaPerfil from './TarjetaPerfil.tsx';

function App() {
  return (
    <section className="pagina">
      <Saludo nombre="Ingeniería de Software" />

      <section className="equipo">
        <TarjetaPerfil nombre="Karla Duarte" carrera="Ingeniería de Software" semestre={5} />
        <TarjetaPerfil nombre="Omar Valdez" carrera="Ingeniería de Software" semestre={7} />
        <TarjetaPerfil nombre="Sofía Ibarra" carrera="Ingeniería en Sistemas" semestre={8} />
      </section>
    </section>
  );
}

export default App;
