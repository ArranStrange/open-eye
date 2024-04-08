import { motion } from 'framer-motion';

import { useScrollPosition } from '../../hooks/use-offset-y';
import blackIcon from '../assets/Icons/black.svg';
import yellowIcon from '../assets/Icons/yellow.svg';
import './styles.css';

function FloatingIcons() {
  const offsetY = useScrollPosition();

  return (
    <div className="floating-icons-container">
      <motion.img
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 1 }}
        className="black-icon"
        alt="background item - black icon"
        src={blackIcon}
        style={{
          transform: `translateY(-${offsetY * 0.3}px) rotate(${offsetY * 0.2}deg)`,
          transition: '.3s',
        }}
      />

      <motion.img
        whileHover={{ scale: 0.96 }}
        transition={{ duration: 1 }}
        className="yellow-icon"
        alt="background item - yellow icon"
        src={yellowIcon}
        style={{
          transform: `translateY(-${offsetY * 0.3}px) rotate(-${offsetY * 0.2}deg)`,
          transition: '.2s',
        }}
      />
    </div>
  );
}

export default FloatingIcons;
