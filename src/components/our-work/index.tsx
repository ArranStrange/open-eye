import { Fade } from 'react-awesome-reveal';

import './styles.css';

function OurWork() {
  return (
    <div className="our-work">
      <Fade direction="left" duration={2000} triggerOnce={true}>
        <p className="our-work-content body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat in elit a
          dapibus. Curabitur odio quam, convallis in vulputate nec, fringilla sit amet nibh. Cras
          elementum, turpis sit amet lacinia interdum, massa ligula congue dolor, eget suscipit
          tortor ante et dolor. Nullam eu nisi justo. Pellentesque fermentum ac ex eget pharetra.
          Proin fermentum mauris ac lacus egestas, a iaculis felis tristique. Cras sit amet neque
          quam. Nam egestas quis augue at condimentum.
        </p>
      </Fade>
      <Fade direction="right" duration={2000} triggerOnce={true}>
        <h1 className="our-work-header">OUR WORK</h1>
      </Fade>
    </div>
  );
}

export default OurWork;
