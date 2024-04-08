import { useEffect } from 'react';

import './styles.css';

function CustomMouse() {
  useEffect(() => {
    document.body.onmousemove = function (e) {
      document.documentElement.style.setProperty('--x', e.clientX + window.scrollX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + window.scrollY + 'px');
    };
  }, []);

  return <div id="invertedcursor" />;
}

export default CustomMouse;
