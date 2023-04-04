import { gelato, sorbet, soy, pizza } from '../../data';
import { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import CardSection from './CardSection';
import gsap from 'gsap/dist/gsap';
import HeaderText from './HeaderText';
import Header from './Header';
import LI from './LI';
import UL from './UL';
import ScrollAlert from './ScrollAlert';
import useIsMobile from '../../utils/useIsMobile';
import LargeMenuPage from './LargeMenuPage';
import SmallMenuPage from './SmallMenuPage';

gsap.registerPlugin(ScrollTrigger);

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
