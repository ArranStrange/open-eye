import { motion } from 'framer-motion';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

import mainLogo from '../Logos/main-logo.svg';
import './Nav.css';

function NavigationBar() {
  const location = useLocation();
  <NavigationBar />;
  return (
    <div className="navbar">
      <LinkRouter to="/home">
        <motion.img
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 1 }}
          className="main-logo"
          alt="main logo"
          src={mainLogo}
        />
      </LinkRouter>

      <div className="link-box">
        {location.pathname === '/' || location.pathname === '/home' ? null : (
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkRouter className="links" to="/home">
              Home{' '}
            </LinkRouter>
          </motion.a>
        )}
        {location.pathname === '/ourwork' ? null : (
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkRouter className="links" to="/ourwork">
              Work{' '}
            </LinkRouter>
          </motion.a>
        )}
        {location.pathname === '/services' ? null : (
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkRouter className="links" to="/services">
              Services{' '}
            </LinkRouter>
          </motion.a>
        )}
        {location.pathname === '/contact' ? null : (
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkRouter className="links" to="/contact">
              Contact{' '}
            </LinkRouter>
          </motion.a>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
