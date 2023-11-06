import yellowDot from '../assets/Dots/dot-yellow.svg';
import meetTheTeam from '../assets/Images/Homepage/meet-the-team.jpeg';
import './styles.css';

function MeetTheTeam() {
  return (
    <div className="meet-the-team-container">
      <div className="meet-the-team-content-container">
        <img
          className="meet-the-team-image shrink-on-hover"
          alt="picture of the team"
          src={meetTheTeam}
        ></img>
        <div className="meet-the-team-link">
          <img className="yellow-dot" alt="link placer - Yellow" src={yellowDot} />
          <a className="meet-the-team-text">Meet the team </a>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
