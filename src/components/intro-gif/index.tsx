import { useEffect, useState } from 'react';

import introGif from '../assets/intro.gif';
import './styles.css';

function IntroGif() {
  const [isVisible, setIsVisible] = useState(true);
  const setTime = 4000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, setTime);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="intro-gif-div">
      {isVisible && <img className="intro-gif" alt="intro-pop-up-gif" src={introGif} />}
    </div>
  );
}

export default IntroGif;
