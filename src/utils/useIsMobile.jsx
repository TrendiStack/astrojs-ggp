import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof navigator !== 'undefined' &&
      /iphone|ipad|ipod|android/i.test(navigator?.userAgent)
  );

  useEffect(() => {
    if (!isMobile) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  return isMobile;
};

export default useIsMobile;
