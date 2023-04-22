import React from 'react';

const DeliveryIcon = ({ src, className }) => {
  return (
    <a
      href="https://order.online/store/gelato-gelato-pizzeria-vaughan-2415193/?hideModal=true&pickup=true"
      target="_blank"
    >
      <img
        src={src}
        alt="door dash logo"
        className={` w-10 h-10 md:w-16 md:h-16 rounded-2xl relative hover:-translate-y-5 duration-500 ${className}`}
      />
    </a>
  );
};

export default DeliveryIcon;
