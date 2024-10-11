import butterflyBackground from 'assets/cardbacks/butterfly_background.png';
import Diamond02 from 'assets/cardfronts/diamond/diamond_02.png';
import Diamond03 from 'assets/cardfronts/diamond/diamond_03.png';
import Diamond04 from 'assets/cardfronts/diamond/diamond_04.png';
import Diamond05 from 'assets/cardfronts/diamond/diamond_05.png';
import Diamond06 from 'assets/cardfronts/diamond/diamond_06.png';
import Diamond07 from 'assets/cardfronts/diamond/diamond_07.png';
import Diamond08 from 'assets/cardfronts/diamond/diamond_08.png';
import Diamond09 from 'assets/cardfronts/diamond/diamond_09.png';
import Diamond10 from 'assets/cardfronts/diamond/diamond_10.png';
import DiamondJ from 'assets/cardfronts/diamond/diamond_J.png';
import DiamondQ from 'assets/cardfronts/diamond/diamond_Q.png';
import DiamondK from 'assets/cardfronts/diamond/diamond_K.png';
import DiamondA from 'assets/cardfronts/diamond/diamond_A.png';

import './CardBackground.css';

export default function Deck({ cardValue }: { cardValue: string }) {
  // Create an object that maps card values to their respective image
  const diamondImages: { [key: string]: string } = {
    A: DiamondA,
    2: Diamond02,
    3: Diamond03,
    4: Diamond04,
    5: Diamond05,
    6: Diamond06,
    7: Diamond07,
    8: Diamond08,
    9: Diamond09,
    10: Diamond10,
    J: DiamondJ,
    Q: DiamondQ,
    K: DiamondK,
  };

  // Use butterfly background by default if no card is selected
  const diamondCardImage = diamondImages[cardValue] || butterflyBackground;

  return (
    <div>
      <img src={diamondCardImage} alt={cardValue} className="card-front" />
    </div>
  );
}
