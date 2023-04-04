import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

const LenisScroll = () => {
  const lenis = new Lenis({
    duration: 1.5,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  useEffect(() => {
    const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return null;
};

export default LenisScroll;
