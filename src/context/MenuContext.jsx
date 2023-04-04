import { createContext, useState } from 'react';
import { useMenu } from '../utils/useMenu';

export const MenuContext = createContext({
  menu: false,
  setMenu: () => {},
  handleClick: () => {},
});

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(prev => !prev);
  };

  useMenu(menu, setMenu);

  const value = {
    menu,
    setMenu,
    handleClick,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
