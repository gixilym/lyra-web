import Download from "./Download.jsx";

function Main() {
  return (
    <main className="main">
      <div className="main-text">
        <p>
          Lyra es un programa de escritorio desarrollado para quienes aman
          escribir sin distracciones. Es tu herramienta perfecta para crear.
        </p>
        <p>
          Cuenta con un diseño minimalista, funciona sin conexión y es
          totalmente gratuito.
        </p>
        <p>Disponible en español e inglés (más próximamente)</p>
        <Download />
      </div>
    </main>
  );
}

export default Main;
