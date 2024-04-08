import { motion } from 'framer-motion';

import brassDot from '../assets/Dots/dot-brass.svg';
import forwards from '../assets/Images/Homepage/forwards.jpeg';
import princes from '../assets/Images/Homepage/princes-gate.png';
import stephenFry from '../assets/Images/Homepage/stephen-fry.jpeg';
import './styles.css';

function OurWork() {
  return (
    <>
      <div className="our-work-container">
        <div className="our-work-image-container">
          <motion.img
            whileHover={{ scale: 0.97 }}
            transition={{ duration: 1 }}
            className="images"
            alt="our project 1"
            src={stephenFry}
          />
          <motion.img
            whileHover={{ scale: 0.97 }}
            transition={{ duration: 1 }}
            className="images"
            alt="our project 2"
            src={forwards}
          />
          <motion.img
            whileHover={{ scale: 0.97 }}
            transition={{ duration: 1 }}
            className="images"
            alt="our project 3"
            src={princes}
          />
          <motion.img
            whileHover={{ scale: 0.97 }}
            transition={{ duration: 1 }}
            className="images"
            alt="our project 14"
            src={princes}
          />
        </div>
        <div className="link-container">
          <a className="link">
            <img className="brass-dot" alt="brass placeholder" src={brassDot} />
            Our Projects
          </a>
        </div>
      </div>
    </>
  );
}

export default OurWork;
