import { Fade } from 'react-awesome-reveal';

import './styles.css';

function OurWork() {
  return (
    <div className="our-work">
      <Fade direction="left" duration={2000} triggerOnce={true}>
        <p className="our-work-content body">
          We sit in the intersection of brand identity and motion design, offering a balance of
          experience and curiosity.
        </p>
      </Fade>
      <Fade direction="right" duration={2000} triggerOnce={true}>
        <h1 className="our-work-header">OUR WORK</h1>
      </Fade>
    </div>
  );
}

export default OurWork;
