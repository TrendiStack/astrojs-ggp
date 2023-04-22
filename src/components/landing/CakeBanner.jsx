import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap/dist/gsap';
const CakeBanner = () => {
  const [atBottom, setAtBottom] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const bodyHeight = document.body.offsetHeight;
      if (windowHeight + scrollY >= bodyHeight - 200) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    const el = textRef.current;
    const tl = gsap.timeline({
      defaults: {
        ease: 'power1.out',
      },
      onComplete: () => {
        tl.clear();
      },
    });

    tl.fromTo(
      el,
      {
        x: el.scrollWidth / 2,
      },
      {
        x: -el.scrollWidth / 2,
        duration: 40,
        repeat: -1,
        ease: 'none',
      }
    );

    return () => {
      tl.clear();
    };
  }, [textRef]);
  return (
    <div
      className={`
      ${atBottom ? '-bottom-24' : 'bottom-0'}
      bg-[#252422] fixed left-0  flex justify-center items-center text-md lg:text-3xl uppercase text-white w-full py-3 z-[990] transition-all duration-500`}
    >
      <a ref={textRef} href="/order-cake">
        <p className="flex gap-3 lg:gap-10 whitespace-nowrap">
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
        </p>
      </a>
    </div>
  );
};

export default CakeBanner;
