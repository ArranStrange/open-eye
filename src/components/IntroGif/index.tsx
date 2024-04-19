import { useEffect, useState } from 'react';

import introGif from './intro.gif';
import './styles.css';

function IntroGif() {
  const [isVisible, setIsVisible] = useState(true);
  const setTime = 3400;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, setTime);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{ zIndex: 999 }} className="intro-gif-div fade-out">
      {isVisible && <img className="intro-gif" alt="intro-pop-up-gif" src={introGif} />}
    </div>
  );
}

export default IntroGif;
