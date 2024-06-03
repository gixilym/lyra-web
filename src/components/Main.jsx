import Download from "./Download.jsx";

function Main() {
  return (
    <main className="main">
      <div className="main-text">
        <h1>
          lyra<span>: deja volar tu creatividad</span>
        </h1>
        <p>
          Diseñada para aquellos que aman escribir de manera enfocada, ya sea un
          libro, pensamientos, un diario personal, o cualquier tipo de
          contenido.
        </p>
        <p>
          Funciona sin conexión, asegurando que tus escritos se mantengan
          seguros, privados y accesibles en tu dispositivo. No se recopilan
          datos de usuario.
        </p>
        <p>
          Ofrece temas para adaptarse a tu estilo, comandos de teclado para una
          experiencia de escritura fluida. Disponible en español e inglés (más
          próximamente)
        </p>
        <p>¡Descarga lyra y transforma tus ideas en palabras!</p>
        <Download />
      </div>
    </main>
  );
}

export default Main;
