import { motion } from 'framer-motion';

import './styles.css';

function OpeningStatement() {
  return (
    <div className="opening-statement-div">
      <motion.p
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 1 }}
        className="opening-statement"
      >
        We add motion to both new, and established brands, and offer new ways to communicate with
        vision.
      </motion.p>
    </div>
  );
}

export default OpeningStatement;
