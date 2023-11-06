import { useScrollPosition } from '../../hooks/use-offset-y';
import blackIcon from '../assets/Icons/black.svg';
import yellowIcon from '../assets/Icons/yellow.svg';
import './styles.css';

function OpeningStatement() {
  const offsetY = useScrollPosition();
  console.log(offsetY);
  return (
    <div className="opening-statement-div">
      <img
        className="black-icon"
        alt="background item - black icon"
        src={blackIcon}
        style={{
          transform: `translateY(-${offsetY * 0.3}px) rotate(${offsetY * 0.2}deg)`,
          transition: '1s',
        }}
      />
      <p className="opening-statement">
        We add motion to both new, and established brands, and offer new ways to communicate with
        vision.
      </p>
      <img
        className="yellow-icon"
        alt="background item - yellow icon"
        src={yellowIcon}
        style={{
          transform: `translateY(-${offsetY * 0.3}px) rotate(-${offsetY * 0.2}deg)`,
          transition: '1s',
        }}
      />
    </div>
  );
}

export default OpeningStatement;
