import { motion } from 'framer-motion';

import yellowDot from '../assets/Dots/dot-yellow.svg';
import './styles.css';

function AboutUs() {
  return (
    <div className="about-us-box">
      <motion.p className="about-us-content-left">
        We sit in the intersection of brand identity and motion design, offering a balance of
        experience and curiosity.
      </motion.p>
      <div className="bottom-container">
        <div className="text-and-link">
          <motion.p className="about-us-content-right">
            We simply add motion to brand identities to help them communicate quickly and
            efficiently. We take care of brands and maintain their authenticity, while adding new
            layers of expression and emotion.
          </motion.p>
          <a className="link" href="">
            <img className="yellow-dot" alt="link placer - Yellow" src={yellowDot} />
            Find out more about what we do
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
