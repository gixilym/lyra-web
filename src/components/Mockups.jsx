import oneImg from "../assets/lyra-one-img.webp";
import twoImg from "../assets/lyra-two-img.webp";

function Mockups() {
  return (
    <figure className="container-mockups">
      <img src={oneImg} alt="lyra mockup" className="mockup" />
      <img src={twoImg} alt="lyra mockup" className="mockup" />
    </figure>
  );
}

export default Mockups;
