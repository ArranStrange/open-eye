import { Fade } from 'react-awesome-reveal';

import './styles.css';

function OurWork() {
  return (
    <Fade direction="right" duration={2000}>
      <div className="our-work">
        <p className="our-work-content body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat in elit a
          dapibus. Curabitur odio quam, convallis in vulputate nec, fringilla sit amet nibh. Cras
          elementum, turpis sit amet lacinia interdum, massa ligula congue dolor, eget suscipit
          tortor ante et dolor. Nullam eu nisi justo. Pellentesque fermentum ac ex eget pharetra.
          Proin fermentum mauris ac lacus egestas, a iaculis felis tristique. Cras sit amet neque
          quam. Nam egestas quis augue at condimentum.
        </p>
        <h1 className="our-work-header">OUR WORK</h1>
      </div>
    </Fade>
  );
}

export default OurWork;
