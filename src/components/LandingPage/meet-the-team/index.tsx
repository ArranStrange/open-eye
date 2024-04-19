import { motion } from 'framer-motion';

import yellowDot from '../assets/Dots/dot-yellow.svg';
import meetTheTeam from '../assets/Images/Homepage/meet-the-team.jpeg';
import './styles.css';

function MeetTheTeam() {
  return (
    <div className="meet-the-team-container">
      <motion.img
        className="meet-the-team-image"
        alt="team meeting in office"
        src={meetTheTeam}
        whileHover={{ scale: 0.99 }}
        transition={{ duration: 1 }}
      />

      <a className="meet-the-team-text">
        <img className="yellow-dot" alt="link placer - Yellow" src={yellowDot} />
        Meet the team
      </a>
    </div>
  );
}

export default MeetTheTeam;
