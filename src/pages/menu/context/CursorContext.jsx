import { createContext, useState, useEffect, useRef } from 'react';

export const CursorContext = createContext({
  isHovered: false,
  listContainerRef: null,
});

export const CursorProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const el1 = document.getElementById('listContainerOne');

    el1.addEventListener('mouseover', handleMouseOver);
    el1.addEventListener('mouseout', handleMouseOut);

    return () => {
      el1.removeEventListener('mouseover', handleMouseOver);
      el1.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const value = { isHovered };

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};
