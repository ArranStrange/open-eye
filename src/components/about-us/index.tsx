import './styles.css';
import yellowDot from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Dots/dot-yellow.svg';
import blueIcon from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Icons/blue.svg';
import greyIcon from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Icons/grey.svg';

function AboutUs() {
  return (
    <div className="about-us-box">
      <div className="top-container">
        <p className="about-us-content-left">
          We sit in the intersection of brand identity and motion design, offering a balance of
          experience and curiosity.
        </p>
        <img className="blue-icon" src={blueIcon}></img>
      </div>
      <div className="bottom-container">
        <img className="grey-icon" src={greyIcon}></img>
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
