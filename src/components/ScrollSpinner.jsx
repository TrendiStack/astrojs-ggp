import { ImArrowUp } from 'react-icons/im';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap/dist/gsap';
import scrolltextnoggp from '../assets/images/scrolltextnoggp.png';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useIsMobile from '../utils/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const ScrollSpinner = () => {
  const [atBottom, setAtBottom] = useState(false);
  const isMobile = useIsMobile();

  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollHandler = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      if (windowHeight + scrollY >= 7000) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    const el = buttonRef.current;

    gsap.to(el, {
      x: atBottom ? 0 : 200,
      duration: 1,
      ease: 'power2.inOut',
    });
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [atBottom]);

  useEffect(() => {
    const el = imgRef.current;
    const el2 = containerRef.current;
    const bodyHeight = document.body.offsetHeight;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: `+=${bodyHeight.toString()}`,
          scrub: 1,
        },
      })
      .to(el, {
        rotate: 360 * 3,
        duration: 1,
        ease: 'none',
      });

    gsap.to(el2, {
      x: atBottom ? 200 : 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [atBottom]);

  return (
    <>
      <div
        ref={containerRef}
        className={`hidden xl:block fixed bottom-10 right-0 scale-75 z-[997] ${
          isMobile ? 'hidden' : 'block'
        }}`}
      >
        <p className="relative text-4xl font-bold rotate-12 uppercase left-14 top-[8.3rem]">
          <span className="text-green-800">g</span>
          <span>g</span>
          <span className="text-red-600">p</span>
        </p>
        <img ref={imgRef} src={scrolltextnoggp} alt="circle scroll text" />
      </div>
      <div
        onClick={handleScrollToTop}
        ref={buttonRef}
        className="fixed bottom-20 right-[1%] w-24 h-24 bg-[#a3a380] rounded-full cursor-pointer"
      >
        <ImArrowUp className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl" />
      </div>
    </>
  );
};

export default ScrollSpinner;
