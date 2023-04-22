import { useState } from 'react';
import { IoIosClose } from 'react-icons/io/index';

const CakeBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <div
      className={`${
        !showBanner && 'hidden'
      } bg-[#252422] relative flex justify-center items-center text-xl text-white w-full py-3 z-50`}
    >
      <a href="/order-cake">Order cake for pick-up now!</a>
      <IoIosClose
        onClick={closeBanner}
        className="absolute right-[5%] lg:right-[2%] cursor-pointer"
      />
    </div>
  );
};

export default CakeBanner;
