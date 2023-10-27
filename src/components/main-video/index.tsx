import './styles.css';

function VideoComponent() {
  return (
    <div className="video-container">
      <video className="video-content" autoPlay controls loop>
        <source src="./components/assets/test-title-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoComponent;
