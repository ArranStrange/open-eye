import { useScrollPosition } from '../../hooks/use-offset-y';
import blackIcon from '../assets/Icons/black.svg';
import yellowIcon from '../assets/Icons/yellow.svg';
import './styles.css';

function OpeningStatement() {
  const offsetY = useScrollPosition();
  console.log(offsetY);
  return (
    <div className="opening-statement-div">
      <p className="opening-statement">
        We add motion to both new, and established brands, and offer new ways to communicate with
        vision.
      </p>
    </div>
  );
}

export default OpeningStatement;
