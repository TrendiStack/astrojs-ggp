import { useRef, useEffect, forwardRef } from 'react';
import Button from '../ui/Button';
import caramelCones from '../../assets/images/caramel-cone.svg';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import emptyCone from '../../assets/images/empty-conev2.png';
import { IoMdArrowDropdown } from 'react-icons/io';
gsap.registerPlugin(ScrollTrigger);

const Header = forwardRef(({ landing }, ref) => {
  const imgRef = useRef(null);
  const emptyConeRef = useRef(null);
  useEffect(() => {
    const el = emptyConeRef.current;
    // Move image down on scroll
    gsap

      .timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top+=100px bottom-=100px',
          end: 'bottom',
          scrub: 1,
        },
      })
      .to(el, {
        y: '30%',
        duration: 5,
        ease: 'power2.inOut',
      });
  }, []);
  useEffect(() => {
    const screenwidth = window.innerWidth;
    const el = imgRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top bottom-=100px',
        end: 'bottom top',
        scrub: true,
      },
    });

    if (screenwidth > 768) {
      tl.to(el, {
        width: '100%',
        overflow: 'hidden',
        duration: 5,
        ease: 'power2.inOut',
      }).to(el, {
        borderRadius: '100%',
        duration: 5,
        ease: 'power2.inOut',
      });
    }
  }, []);
  return (
    <>
      {landing ? (
        <header>
          <div
            ref={imgRef}
            className="bg-[#ffd5c2] flex flex-col justify-center h-screen text-center font-medium spartan text-[#252422] header-primary relative overflow-hidden"
          >
            <h1 className="relative bottom-16">
              Sicilian flavors in every
              <br /> scoop and slice
            </h1>
            <div
              className="absolute flex justify-center rounded-full h-[40%] bg-[#a3a380] top-[60%] left-1/2 transform -translate-x-1/2 px-40 min-w-[100%] md:min-w-[80%] lg:min-w-[40%] max-w-[100%] md:max-w-[80%] lg:max-w-[40%] min-h-[100%]
         "
            ></div>

            <p className="opacity-0 2xl:opacity-100 absolute bottom-12 left-10 text-xl font-light text-right w-[29rem] text-black">
              Savor the authentic flavors of Italy at Gelato Gelato, located in
              the heart of Vaughan. Our menu is a celebration of Italian
              cuisine, featuring mouth-watering pasta dishes, wood-fired pizzas,
              and an irresistible variety of rich and creamy gelato flavors.
              From classic Margherita to decadent Nutella, there's something to
              please every palate.
            </p>
          </div>
          {/* <img
            src={caramelCones}
            alt="Ice cream cone"
            className="absolute top-[63%] left-1/2 transform -translate-x-1/2 min-w-[50%] sm:min-w-[40%] md:min-w-[30%] lg:min-w-[20%]"
          /> */}
          <img
            src={caramelCones}
            alt="Ice cream cone"
            className="absolute top-[70%] lg:top-[65%] left-1/2 transform -translate-x-1/2 max-w-[50%] md:max-w-[100%] "
          />
        </header>
      ) : (
        <header
          ref={ref}
          className="grid grid-cols-1 lg:block place-items-center relative z-[101] h-screen text-[#252422] spartan bg-[#ffd5c2]"
        >
          <div className="flex flex-col lg:flex-row items-center text-center">
            <h1 className="lg:relative header-secondary left-32 bottom-10 font-medium w-full">
              Our menu <br />
            </h1>
            <IoMdArrowDropdown className="text-4xl animate-bounce lg:hidden" />
            <div className="hidden lg:flex items-center h-screen w-full bg-[#60604c] rounded-l-full">
              <img
                ref={emptyConeRef}
                src={emptyCone}
                alt="Empty ice cream cone"
                className="ml-36 rotate-[20deg]"
              />
            </div>
          </div>

          <Button dining>
            <a href="https://www.gelatogelato.ca/menu.pdf" target="_blank">
              Full Menu
            </a>
          </Button>
        </header>
      )}
    </>
  );
});

export default Header;
