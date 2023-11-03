import forwards from '../assets/Images/Homepage/forwards.jpeg';
import princes from '../assets/Images/Homepage/princes-gate.jpg';
import stephenFry from '../assets/Images/Homepage/stephen-fry.jpeg';
import './styles.css';

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
