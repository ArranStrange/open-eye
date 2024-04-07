import { motion } from 'framer-motion';

import yellowDot from '../assets/Dots/dot-yellow.svg';
import meetTheTeam from '../assets/Images/Homepage/meet-the-team.jpeg';
import './styles.css';

function MeetTheTeam() {
  return (
    <div className="meet-the-team-container">
      <img
        className="meet-the-team-image shrink-on-hover"
        alt="team meeting in office"
        src={meetTheTeam}
      ></img>

      <a className="meet-the-team-text">
        {' '}
        <motion.img
          whileHover={{ scale: 0.97 }}
          transition={{ duration: 1 }}
          className="yellow-dot"
          alt="link placer - Yellow"
          src={yellowDot}
        />
        Meet the team
      </a>
    </div>
  );
}

export default MeetTheTeam;
