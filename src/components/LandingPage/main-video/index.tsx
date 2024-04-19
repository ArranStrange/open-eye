import { motion } from 'framer-motion';

import videoSource from '../assets/test-title-video.mp4';
import './styles.css';

function VideoComponent() {
  return (
    <div className="video-container">
      <motion.video
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 1 }}
        className="video-content"
        autoPlay
        muted
        loop
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </div>
  );
}

export default VideoComponent;
