import { useScrollPosition } from '../../hooks/use-offset-y';
import blueIcon from '../assets/Icons/blue.svg';
import greyIcon from '../assets/Icons/grey.svg';
import './styles.css';

function FloatingIcons2() {
  const offsetY = useScrollPosition();
  console.log(offsetY);
  return (
    <div className="floating-icons-container-2">
      <img
        className="grey-icon"
        alt="background item - grey icon"
        src={greyIcon}
        style={{
          transform: `translateY(${offsetY * 0.02}px) rotate(-${offsetY * 0.04}deg)`,
          transition: '.2s',
        }}
      />

      <img
        className="blue-icon"
        alt="background item - blue icon"
        src={blueIcon}
        style={{
          transform: `translateY(${offsetY * 0.02}px) rotate(${offsetY * 0.1}deg)`,
          transition: '.2s',
        }}
      />
    </div>
  );
}

export default FloatingIcons2;
