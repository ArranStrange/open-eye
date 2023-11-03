import { useScrollPosition } from '../../hooks/use-offset-y';
import blackIcon from '../assets/Icons/black.svg';
import yellowIcon from '../assets/Icons/yellow.svg';
import './styles.css';

function OpeningStatement() {
  const offsetY = useScrollPosition();

  return (
    <div className="opening-statement-div">
      <img
        className="black-icon"
        src={blackIcon}
        style={{
          transform: `translateY(-${offsetY * 0.5}px) rotate(${offsetY * 0.2}deg)`,
        }}
      />
      <p className="opening-statement">
        We add motion to both new, and established brands, and offer new ways to communicate with
        vision.
      </p>
      <img
        className="yellow-icon"
        src={yellowIcon}
        style={{
          transform: `translateY(-${offsetY * 0.5}px) rotate(-${offsetY * 0.2}deg)`,
        }}
      />
    </div>
  );
}

export default OpeningStatement;
