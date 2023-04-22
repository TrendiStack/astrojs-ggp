import { CursorProvider } from '../pages/menu/context/CursorContext';
import { useState } from 'react';
import AnimatedMenu from '../pages/menu/components/AnimatedMenu';
import UnanimatedMenu from '../pages/menu/components/UnanimatedMenu';

function Main() {
  const [selected, setSelected] = useState({
    categoryOne: 'regular',
    categoryTwo: 'pizza',
  });
  return (
    <CursorProvider>
      <AnimatedMenu selected={selected} setSelected={setSelected} />
      <UnanimatedMenu selected={selected} setSelected={setSelected} />
    </CursorProvider>
  );
}

export default Main;
