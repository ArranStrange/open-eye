import mainLogo from '../assets/Logos/main-logo.svg';
import LinkWrapper from '../link-wrapper';
import './styles.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="main-logo" alt="main logo" src={mainLogo}></img>
      </div>
      <div className="link-box">
        <LinkWrapper>
          <a className="links" href="/">
            Work{' '}
          </a>
        </LinkWrapper>
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
