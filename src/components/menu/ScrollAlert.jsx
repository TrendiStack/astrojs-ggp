import { gsap } from 'gsap';
import { useContext, useEffect, useRef, useState } from 'react';
import { CursorContext } from '../../pages/menu/context/CursorContext';

const ScrollAlert = () => {
  const { isHovered } = useContext(CursorContext);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const container = useRef(null);
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    if (isHovered) {
      gsap.to(el, {
        scale: 1,
        x: mousePosition.x + 50,
        y: mousePosition.y + 50,
      });
    } else {
      gsap.to(el, {
        scale: 0,
        duration: 0.5,
      });
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <div
      ref={container}
      className="
      fixed
      -top-20
      -left-20
      hidden
      lg:flex
      justify-center
      items-center
      aspect-square
      bg-[#252422]
      rounded-full 
      z-[1000]
      pointer-events-none
      text-sm
      "
    >
      <p className="py-2 px-3 text-white">Scroll</p>
    </div>
  );
};

export default ScrollAlert;
