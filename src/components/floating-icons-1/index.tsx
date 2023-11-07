import { useScrollPosition } from '../../hooks/use-offset-y';
import blackIcon from '../assets/Icons/black.svg';
import yellowIcon from '../assets/Icons/yellow.svg';
import './styles.css';

function FloatingIcons() {
  const offsetY = useScrollPosition();
  console.log(offsetY);
  return (
    <div className="floating-icons-container">
      <img
        className="black-icon"
        alt="background item - black icon"
        src={blackIcon}
        style={{
          transform: `translateY(-${offsetY * 0.3}px) rotate(${offsetY * 0.2}deg)`,
          transition: '.3s',
        }}
      />

      <img
        className="yellow-icon"
        alt="background item - yellow icon"
        src={yellowIcon}
        style={{
          transform: `translateY(-${offsetY * 0.3}px) rotate(-${offsetY * 0.2}deg)`,
          transition: '.2s',
        }}
      />
    </div>
  );
}

export default FloatingIcons;
