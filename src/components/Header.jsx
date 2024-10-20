import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" width={40} />
      <h1>
        Lyra<span>:&nbsp;&nbsp;Escritura enfocada</span>
      </h1>
    </header>
  );
}

export default Header;
