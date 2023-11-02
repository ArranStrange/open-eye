import './styles.css';
import blackIcon from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Icons/black.svg';
import yellowIcon from '/Users/arranstrange/Documents/Coding/luke-and-saph/src/components/assets/Icons/yellow.svg';

function OpeningStatement() {
  return (
    <div className="opening-statement-div">
      <img className="black-icon" src={blackIcon}></img>
      <p className="opening-statement">
        We add motion to both new, and established brands, and offer new ways to communicate with
        vision.
      </p>
      <img className="yellow-icon" src={yellowIcon}></img>
    </div>
  );
}

export default OpeningStatement;
