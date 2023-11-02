import { Fade } from 'react-awesome-reveal';

import './styles.css';

function AboutUs() {
  return (
    <div className="about-us">
      <Fade direction="right" duration={2000} triggerOnce={true}>
        <p className="about-us-content body">
          We sit in the intersection of brand identity and motion design, offering a balance of
          experience and curiosity.
        </p>
      </Fade>
    </div>
  );
}

export default AboutUs;
