import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useWindowScroll = () => {
  /* eslint-disable */
  const [windowOffset, setWindowOffset] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, windowOffset);
    }
  }, []);
  /* eslint-enable */

  return [windowOffset, setWindowOffset] as [
    windowOffset: number,
    setWindowOffset: Dispatch<SetStateAction<number>>
  ];
};

export default useWindowScroll;
