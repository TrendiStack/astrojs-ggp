import Cone from '../../assets/images/Cone';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

const Logo = () => {
  const { menu } = useContext(MenuContext);
  return (
    <a href="/">
      <Cone
        pathClassName={`${menu ? 'fill-white' : 'fill-black'} cursor-pointer`}
        svgClassName="h-16 md:h-24 aspect-square"
      />
    </a>
  );
};

export default Logo;
