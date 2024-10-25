function Alert() {
  return (
    <div className="alert" role="alert">
      <div className="alert-content">
        <div className="alert-text">
          <span>Aviso</span>
          <p>
            Puede que tu navegador detecte como un virus el instalador, pero no
            te preocupes, Lyra no contiene ningún tipo de malware. Puedes
            verificar el código fuente desde el{" "}
            <a href="https://github.com/gixilym/lyra" target="_blank">
              repositorio
            </a>{" "}
            de Github.
          </p>
        </div>
      </div>
      <style jsx="true">{`
        .alert {
          max-width: 600px;
          margin: 10px auto;
          background-color: #362d3d;
          border-left: 4px solid #8e24aa;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          color: #fff;
        }
        .alert-content {
          display: flex;
          align-items: flex-start;
        }
        .alert-text span {
          font-size: 24px;
          font-weight: bold;
          display: block;
          margin-bottom: 10px;
          font-family: Arial;
        }
        .alert-text p {
          font-size: 17px;
          margin: 10px 0;
          width: 100%;
          line-height: 1.5;
        }
        .alert-text p a {
          color: #fff;
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .alert {
            max-width: 100%;
            padding: 0.75rem;
          }
          .alert-text span {
            font-size: 20px;
          }
          .alert-text p {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .alert {
            padding: 0.5rem;
          }
          .alert-text span {
            font-size: 18px;
          }
          .alert-text p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}

export default Alert;
