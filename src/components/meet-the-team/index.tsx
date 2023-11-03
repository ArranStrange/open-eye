import yellowDot from '../assets/Dots/dot-yellow.svg';
import meetTheTeam from '../assets/Images/Homepage/meet-the-team.jpeg';
import './styles.css';

function MeetTheTeam() {
  return (
    <div className="meet-the-team-container">
      <div className="meet-the-team-content-container">
        <img className="meet-the-team-image shrink-on-hover" src={meetTheTeam}></img>
        <div className="meet-the-team-link">
          <img className="yellow-dot" src={yellowDot} />
          <a>Meet the team </a>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
