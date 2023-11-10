import { useEffect, useState } from 'react';

import introGif from '../assets/intro.gif';
import './styles.css';

function IntroGif() {
  const [isVisible, setIsVisible] = useState(true);
  const setTime = 3400;
  const [zIndex, setZIndex] = useState(999);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setZIndex(-999);
    }, setTime);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ zIndex: zIndex }} className="intro-gif-div fade-out">
      {isVisible && <img className="intro-gif" alt="intro-pop-up-gif" src={introGif} />}
    </div>
  );
}

export default IntroGif;
