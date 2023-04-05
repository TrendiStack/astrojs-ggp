import { MenuProvider } from '../../context/MenuContext';
import Logo from '../Logo';
import Menu from '../Menu';

import NavTitle from '../nav/NavTitle';
import Button from '../ui/Button';

const Nav = () => {
  return (
    <MenuProvider>
      <nav className="flex justify-between items-center bg-transparent text-white fixed w-full py-5 z-[999] px-[5%] lg:px-[2%]">
        <Logo />
        <NavTitle />
        <Button menuBtn>menu</Button>
        <div className="fixed rotate-90 right-0 top-2/4 mt-28 transform translate-y-1/2 origin-top-right mx-[5%] lg:mx-[2%]">
          <Button reservation className="">
            reservation
          </Button>
        </div>
      </nav>
      <Menu />
    </MenuProvider>
  );
};

export default Nav;
