import { motion } from 'framer-motion';

import mainLogo from '../assets/Logos/main-logo.svg';
import LinkWrapper from '../link-wrapper';
import './styles.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <motion.img
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 1 }}
        className="main-logo"
        alt="main logo"
        src={mainLogo}
      />
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
