import { useRef, useEffect } from 'react';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import restaurant from '../assets/images/restaurant.avif';

const Circle = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          pin: true,
          scrub: 1,
        },
      })
      .from(el, {
        width: '20vw',
        height: '40vh',
      })
      .to(el, {
        width: '80vw',
        height: '80vh',
      });
  }, [ref]);
  return (
    <div className="circle h-screen w-screen relative">
      <div
        ref={ref}
        className="absolute left-[50%] transform -translate-x-1/2 overflow-hidden rounded-full flex justify-center"
      >
        <img
          src={restaurant}
          alt=""
          className="w-[80vw] h-[80vh] object-cover max-w-none min-w-[80vw] min-h-[80vh]"
        />
      </div>
    </div>
  );
};

export default Circle;
