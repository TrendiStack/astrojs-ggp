import { IoMdArrowDropdown } from 'react-icons/io/index';
import { useRef, useEffect, forwardRef } from 'react';
import gsap from 'gsap/dist/gsap';
import Button from './ui/Button';
import caramelCones from '../assets/images/caramel-cone.svg';
import emptyCone from '../assets/images/empty-conev2.png';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import doorDash from '../assets/images/icons/DoorDash - jpeg.png';
import skip from '../assets/images/icons/SkipTheDishes - png.png';
import ubereats from '../assets/images/icons/Uber Eats - jpeg.png';
import DeliveryIcon from './icons/DeliveryIcon';

const Header = forwardRef(({ route }, ref) => {
  const imgRef = useRef(null);
  const emptyConeRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = emptyConeRef.current;
    if (!el) return;
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
    if (!el) return;
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
    <div className="relative">
      {/* <div className="absolute grid grid-cols-1 gap-4 top-1/2 -translate-y-1/2 pb-24 mx-[5%] lg:mx-[2%] z-50">
        <DeliveryIcon
          href="https://order.online/store/gelato-gelato-pizzeria-vaughan-2415193/?hideModal=true&pickup=true"
          src={doorDash}
        />

        <DeliveryIcon
          href="https://www.ubereats.com/ca/store/gelato-gelato-pizzeria/TcypftTcQp-c0ym2D0KPRQ"
          src={ubereats}
        />
        <DeliveryIcon
          href="https://www.skipthedishes.com/gelato-gelato-pizzeria"
          src={skip}
        />
      </div> */}
      {route === 'landing' ? (
        <header>
          <div
            ref={imgRef}
            className="bg-[#ffd5c2] flex flex-col items-center justify-center h-screen text-center font-medium spartan text-[#252422] header-primary relative overflow-hidden"
          >
            <h1 className="relative bottom-24 lg:bottom-16">
              Sicilian flavors in every
              <br /> scoop and slice
            </h1>
            <div className="flex gap-4 relative bottom-24 lg:bottom-14">
              <DeliveryIcon
                href="https://order.online/store/gelato-gelato-pizzeria-vaughan-2415193/?hideModal=true&pickup=true"
                src={doorDash}
              />

              <DeliveryIcon
                href="https://www.ubereats.com/ca/store/gelato-gelato-pizzeria/TcypftTcQp-c0ym2D0KPRQ"
                src={ubereats}
              />
              <DeliveryIcon
                href="https://www.skipthedishes.com/gelato-gelato-pizzeria"
                src={skip}
              />
            </div>
            <div
              className="absolute flex justify-center rounded-full h-[40%] bg-[#a3a380] top-[60%] left-1/2 transform -translate-x-1/2 px-40 min-w-[100%] md:min-w-[80%] lg:min-w-[40%] max-w-[100%] md:max-w-[80%] lg:max-w-[40%] min-h-[100%]
         "
            ></div>

            <p className="opacity-0 xl:opacity-100 absolute bottom-12 left-10 text-base 2xl:text-xl font-light text-right w-[20rem] 2xl:w-[28rem] text-black">
              Savor the authentic flavors of Italy at Gelato Gelato, located in
              the heart of Vaughan. Our menu is a celebration of Italian
              cuisine, featuring mouth-watering pasta dishes, wood-fired pizzas,
              and an irresistible variety of rich and creamy gelato flavors.
              From classic Margherita to decadent Nutella.
            </p>
          </div>
          <img
            src={caramelCones}
            alt="Ice cream cone"
            className="absolute top-[70%] lg:top-[65%] left-1/2 transform -translate-x-1/2 max-w-[50%] md:max-w-[100%] "
          />
        </header>
      ) : route === 'menu' ? (
        <header
          ref={ref}
          className="grid grid-cols-1 lg:block place-items-center relative h-screen text-[#252422] spartan bg-[#ffd5c2]"
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
                className="ml-36 rotate-[20deg] w-[30%] 2xl:w-auto ]"
              />
            </div>
          </div>

          <Button dining>
            <a href="https://www.gelatogelato.ca/menu.pdf" target="_blank">
              Full Menu
            </a>
          </Button>
        </header>
      ) : (
        <header className="grid grid-cols-1 lg:block place-items-center relative h-screen text-[#252422] spartan bg-[#ffd5c2]">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <h1 className="lg:relative header-secondary left-32 bottom-10 font-medium w-full">
              {route} <br />
            </h1>
            <IoMdArrowDropdown className="text-4xl animate-bounce lg:hidden" />
            <div className="hidden lg:flex items-center h-screen w-full bg-[#60604c] rounded-l-full"></div>
          </div>
        </header>
      )}
    </div>
  );
});

export default Header;
