import { useState } from 'react';
import useIsMobile from '../../utils/useIsMobile';
import LargeMenuPage from './LargeMenuPage';
import SmallMenuPage from './SmallMenuPage';

const GelatoMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <div className="hidden lg:block">
        <LargeMenuPage
          isMobile={isMobile}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      </div>
      <div className="lg:hidden">
        <SmallMenuPage
          isMobile={isMobile}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      </div>
    </>
  );
};

export default GelatoMenu;
