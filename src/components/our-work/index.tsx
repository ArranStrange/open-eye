import brassDot from '../assets/Dots/dot-brass.svg';
import forwards from '../assets/Images/Homepage/forwards.jpeg';
import princes from '../assets/Images/Homepage/princes-gate.jpg';
import stephenFry from '../assets/Images/Homepage/stephen-fry.jpeg';
import './styles.css';

function OurWork() {
  return (
    <>
      <div className="our-work-container">
        <div className="our-work-image-container">
          <img className="images shrink-on-hover" src={stephenFry} />
          <img className="images shrink-on-hover" src={forwards} />
          <img className="images shrink-on-hover" src={princes} />
          <img className="images shrink-on-hover" src={princes} />
        </div>
        <div className="link-container">
          <img className="brass-dot" src={brassDot} />
          <a className="link">Our Projects</a>
        </div>
      </div>
    </>
  );
}

export default OurWork;
