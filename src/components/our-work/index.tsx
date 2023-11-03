import { Fade } from 'react-awesome-reveal';

import './styles.css';
import forwards from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Images/Homepage/forwards.jpeg';
import princes from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Images/Homepage/princes-gate.jpg';
import stephenFry from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Images/Homepage/stephen-fry.jpeg';

function OurWork() {
  return (
    <div className="our-work-image-container">
      <img className="images shrink-on-hover" src={stephenFry} />
      <img className="images shrink-on-hover" src={forwards} />
      <img className="images shrink-on-hover" src={princes} />
      <img className="images shrink-on-hover" src={princes} />
    </div>
  );
}

export default OurWork;
