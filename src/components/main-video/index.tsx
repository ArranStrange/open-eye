import videoSource from '../assets/test-title-video.mp4';
import './styles.css';

function VideoComponent() {
  return (
    <div className="video-main-div">
      <div className="video-container">
        <video className="video-content" autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoComponent;
