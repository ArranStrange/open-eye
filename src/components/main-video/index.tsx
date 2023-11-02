import { Fade } from 'react-awesome-reveal';

import videoSource from '../assets/test-title-video.mp4';
import './styles.css';

function VideoComponent() {
  return (
    <div className="video-container">
      <video className="video-content" autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
