import { useEffect, useState } from 'react';

import lodash from 'lodash';

export const useScrollPosition = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', lodash.debounce(handleScroll, 5));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offsetY;
};
