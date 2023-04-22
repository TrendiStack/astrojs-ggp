import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MenuContext } from '../../context/MenuContext.jsx';
import LocationNav from '../nav/LocationNav.jsx';
import Icon from '../icons/Icon.jsx';

const Menu = () => {
  const { menu } = useContext(MenuContext);
  const menuRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const el = menuRef.current;
    const list = listRef.current;
    let tl = null;

    const menuAnimation = () => {
      const translateY = menu ? '0%' : '-100%';

      gsap.to(el, {
        '--translateY': translateY,
        duration: 0.2,
      });
    };

    const staggeredList = () => {
      tl = gsap.timeline({
        defaults: {
          ease: 'power1.out',
        },
        onComplete: () => {
          tl.clear();
        },
      });

      tl.fromTo(
        list.children,
        {
          opacity: 0,
          y: -120,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        }
      );
    };

    menuAnimation();
    staggeredList();

    return () => {
      menuAnimation();
      tl.clear();
    };
  }, [menu]);

  return (
    <div
      ref={menuRef}
      className={`
      fixed
      top-0
      left-0
      w-full
      min-h-screen 
      bg-[#252422] 
      text-white
      z-[998]
      flex
      flex-col
      justify-center
      items-center
      `}
      style={{
        '--translateY': '-100%',
        transform: 'translateY(var(--translateY))',
      }}
    >
      <ul ref={listRef} className="header-primary grid grid-cols-1 gap-2">
        <li>
          <a href="/menu">Menu</a>
        </li>
        {/* <li>
          <a href="/catering">Cartering</a>
        </li> */}
        <li>
          <a href="/order-cake">Order</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>

        <LocationNav
          menuItem
          className="my-5 text-xl md:text-3xl lg:absolute bottom-10 left-[5%] lg:left-[2%] "
        />
        <div className="lg:absolute bottom-10 right-[5%] lg:right-[2%] ">
          <Icon />
        </div>
      </ul>
    </div>
  );
};

export default Menu;
