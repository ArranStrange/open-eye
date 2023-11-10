import yellowDot from '../assets/Dots/dot-yellow.svg';
import './styles.css';

function AboutUs() {
  return (
    <div className="about-us-box">
      <div className="top-container">
        <p className="about-us-content-left">
          We sit in the intersection of brand identity and motion design, offering a balance of
          experience and curiosity.
        </p>
      </div>
      <div className="bottom-container">
        <div className="about-us-content-right">
          We simply add motion to brand identities to help them communicate quickly and efficiently.
          We take care of brands and maintain their authenticity, while adding new layers of
          expression and emotion.
          <div className="find-out-more">
            <img className="yellow-dot" alt="link placer - Yellow" src={yellowDot} />
            <a className="link"> Find out more about what we do</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
