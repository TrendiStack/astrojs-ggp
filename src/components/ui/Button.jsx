import { useContext, useState } from 'react';
import { MenuContext } from '../../context/MenuContext';

const Button = ({
  menuBtn,
  reservation,
  large,
  className,
  children,
  contact,
}) => {
  const { menu, handleClick } = useContext(MenuContext);
  const [mouseOver, setMouseOver] = useState({
    menu: false,
    reservation: false,
  });
  const variants = {
    circle: `${
      menu ? 'bg-white text-[#252422]' : 'bg-[#a3a380] text-white'
    }  text-base md:text-xl lg:text-2xl font-medium p-4 aspect-square rounded-full`,
    long: `${
      menu ? 'bg-white text-[#252422]' : 'bg-[#a3a380] text-white'
    } text-base md:text-xl lg:text-3xl px-6 py-3 rounded-full`,
    lg: 'bg-[#a3a380] text-white text-2xl font-medium px-10 py-3 md:px-14 md:py-5 rounded-full',
    dining:
      'absolute left-[1%] bottom-24 lg:bottom-36 bg-[#a3a380] text-white rounded-full text-base md:text-xl lg:text-2xl py-4 px-8 text-2xl font-medium',
  };
  const { circle, long, lg, dining } = variants;

  return (
    <button
      onClick={() => {
        menuBtn && handleClick();
      }}
      {...(contact && { type: 'submit' })}
      className={`${
        menuBtn
          ? circle
          : reservation
          ? long
          : large
          ? lg
          : dining
          ? dining
          : null
      } ${className} `}
    >
      <div
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        className="flex flex-col items-center relative overflow-hidden "
      >
        <p
          className={`relative ${
            mouseOver ? 'bottom-8' : 'bottom-0'
          } transition-all duration-500`}
        >
          {children}
        </p>
        <p
          className={`absolute ${
            mouseOver ? 'top-0' : 'top-8'
          } transition-all duration-500`}
        >
          {children}
        </p>
      </div>
    </button>
  );
};

export default Button;
