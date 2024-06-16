import oneImg from "../assets/lyra-one-img.webp";
import twoImg from "../assets/lyra-two-img.webp";
import threeImg from "../assets/lyra-three-img.webp";

function Mockups() {
  return (
    <figure className="container-mockups">
      <img src={oneImg} alt="mockup" className="mockup" />
      <img src={twoImg} alt="mockup" className="mockup" />
      <img src={threeImg} alt="mockup" className="mockup" />
    </figure>
  );
}

export default Mockups;
