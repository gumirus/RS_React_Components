import flowersImage from '../assets/image/flowers.jpg';
import heartImage from '../assets/image/heart.png';
import jungImage from '../assets/image/jung.jpg';
import treeImage from '../assets/image/tree.jpg';
import violinImage from '../assets/image/violin.jpg';
import tigerImage from '../assets/image/tiger.jpg';
import eagleImage from '../assets/image/eagle.jpg';
import butterflyImage from '../assets/image/butterfly.jpg';
import pandaImage from '../assets/image/panda.jpg';
import owlImage from '../assets/image/owl.jpg';
import fishImage from '../assets/image/fish.jpg';
import bearImage from '../assets/image/bear.jpg';

function Cards() {
  return (
    <>
      <img src={flowersImage} alt="Flowers" />
      <img src={heartImage} alt="Heart" />
      <img src={jungImage} alt="Jung" />
      <img src={treeImage} alt="Tree" />
      <img src={violinImage} alt="Violin" />
      <img src={tigerImage} alt="Tiger" />
      <img src={eagleImage} alt="Eagle" />
      <img src={butterflyImage} alt="Butterfly" />
      <img src={pandaImage} alt="Panda" />
      <img src={owlImage} alt="Owl" />
      <img src={fishImage} alt="Fish" />
      <img src={bearImage} alt="Bear" />
    </>
  );
}

export default Cards;
