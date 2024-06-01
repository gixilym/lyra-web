import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} title="lyra logo" alt="lyra logo" width={40} />
      <p role="heading">
        <span style={{ fontWeight: "semibold" }}>l</span>y
        <span style={{ fontWeight: "semibold" }}>r</span>a
      </p>
    </header>
  );
}

export default Header;
