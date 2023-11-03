import './styles.css';
import meetTheTeam from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Images/Homepage/meet-the-team.jpeg';

function MeetTheTeam() {
  return (
    <div className="meet-the-team-container">
      <div className="meet-the-team-content-container">
        <img className="meet-the-team-image shrink-on-hover" src={meetTheTeam}></img>
        <div className="meet-the-team-link">
          <a>Meet The Team </a>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
