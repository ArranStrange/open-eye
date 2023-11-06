import mainLogo from '../assets/Logos/main-logo.svg';
import './styles.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="main-logo" src={mainLogo}></img>
      </div>
      <div className="link-box">
        <a className="links" href="/">
          Work{' '}
        </a>
        <a className="links" href="/">
          Services{' '}
        </a>
        <a className="links" href="/">
          Contact{' '}
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
