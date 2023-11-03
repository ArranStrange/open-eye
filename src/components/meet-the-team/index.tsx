import './styles.css';
import yellowDot from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Dots/dot-yellow.svg';
import meetTheTeam from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Images/Homepage/meet-the-team.jpeg';

function MeetTheTeam() {
  return (
    <div className="meet-the-team-container">
      <div className="meet-the-team-content-container">
        <img className="meet-the-team-image shrink-on-hover" src={meetTheTeam}></img>
        <div className="meet-the-team-link">
          <img className="yellow-dot" src={yellowDot} />
          <a>Meet The Team </a>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
