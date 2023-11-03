import mainLogo from '../assets/Logos/main-logo.svg';
import './styles.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="main-logo" src={mainLogo}></img>
      </div>
      <div className="links">
        <a href="/">Work </a>
        <a href="/">Services </a>
        <a href="/">Contact </a>
      </div>
    </div>
  );
}

export default NavigationBar;
