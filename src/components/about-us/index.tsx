import { useScrollPosition } from '../../hooks/use-offset-y';
import yellowDot from '../assets/Dots/dot-yellow.svg';
import blueIcon from '../assets/Icons/blue.svg';
import greyIcon from '../assets/Icons/grey.svg';
import './styles.css';

function AboutUs() {
  const offsetY = useScrollPosition();
  return (
    <div className="about-us-box">
      <div className="top-container">
        <p className="about-us-content-left">
          We sit in the intersection of brand identity and motion design, offering a balance of
          experience and curiosity.
        </p>
        <img
          className="blue-icon"
          src={blueIcon}
          style={{
            transform: `rotate(${offsetY * 0.05}deg)`,
            transition: '.5s',
          }}
        />
      </div>
      <div className="bottom-container">
        <img
          className="grey-icon"
          src={greyIcon}
          style={{
            transform: `rotate(-${offsetY * 0.1}deg)`,
            transition: '.5s',
          }}
        />
        <div className="about-us-content-right">
          We simply add motion to brand identities to help them communicate quickly and efficiently.
          We take care of brands and maintain their authenticity, while adding new layers of
          expression and emotion.
          <div className="find-out-more">
            <img className="yellow-dot" src={yellowDot} />
            <a className="link"> Find out more about what we do</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
