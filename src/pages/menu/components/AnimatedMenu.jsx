import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import FlavourContainer from './FlavourContainer';
import FlavourTypeButton from '../../../components/menu/FlavourTypeButton';
import gsap from 'gsap/dist/gsap';
import Header from '../../../components/Header';
import ScrollAlert from '../../../components/menu/ScrollAlert';
import useIsMobile from '../../../utils/useIsMobile';
import FlavourSelect from '../../../components/menu/FlavourSelect';

const AnimatedMenu = ({ selected, setSelected }) => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;
    let scrollTween;
    const animateHorizontalScroll = () => {
      scrollTween = gsap.to(containerRef.current, {
        xPercent: -100 * (containerRef.current.offsetWidth / window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${containerRef.current.offsetWidth}`,
        },
      });
    };

    animateHorizontalScroll();
    return () => {
      scrollTween.kill();
    };
  }, [containerRef]);
  return (
    <div className="overflow-hidden hidden lg:block">
      {!isMobile && <ScrollAlert />}
      <Header route="menu" />
      <div className="flex h-screen pt-36 " ref={containerRef}>
        <FlavourContainer header="gelato - flavours">
          <div className="flex flex-col items-stretch justify-center gap-10">
            <FlavourTypeButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="regular"
              type="gelato"
            />
            <FlavourTypeButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="sorbet"
              type="gelato"
            />
            <FlavourTypeButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="soy"
              type="gelato"
            />
          </div>
          <FlavourSelect selected={selected.categoryOne} type="gelato" />
        </FlavourContainer>
        <FlavourContainer header="dining - options">
          <div className="grid grid-cols-2 place-content-center justify-center text-center gap-10">
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="pizza"
            />
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="pasta"
            />
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="antipasti"
            />
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="insalate"
            />
            <FlavourTypeButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="meat"
            />
          </div>
          <FlavourSelect selected={selected.categoryTwo} type="dining" />
        </FlavourContainer>
      </div>
    </div>
  );
};

export default AnimatedMenu;
