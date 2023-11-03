import { Fade } from 'react-awesome-reveal';

import './styles.css';
import forwards from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Images/Homepage/forwards.jpeg';
import princes from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Images/Homepage/princes-gate.jpg';
import stephenFry from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Images/Homepage/stephen-fry.jpeg';

function OurWork() {
  return (
    <div className="our-work-container">
      <img className="images" src={stephenFry}></img>
      <img className="images" src={forwards}></img>
      <img className="images" src={princes}></img>
      <img className="images" src={princes}></img>
    </div>
  );
}

export default OurWork;
