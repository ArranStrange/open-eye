import { Fade } from 'react-awesome-reveal';

import './styles.css';

function AboutUs() {
  return (
    <Fade direction="left" duration={2000}>
      <div className="about-us">
        <h1 className="header">ABOUT US</h1>
        <p className="about-us-content body">
          We're Saph and Luke, Motion and Graphics Guys. Check out the video above, it's not ours,
          but it's cool. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          feugiat in elit a dapibus. Curabitur odio quam, convallis in vulputate nec, fringilla sit
          amet nibh. Cras elementum, turpis sit amet lacinia interdum, massa ligula congue dolor,
          eget suscipit tortor ante et dolor. Nullam eu nisi justo. Pellentesque fermentum ac ex
          eget pharetra. Proin fermentum mauris ac lacus egestas, a iaculis felis tristique. Cras
          sit amet neque quam. Nam egestas quis augue at condimentum.
        </p>
      </div>
    </Fade>
  );
}

export default AboutUs;
