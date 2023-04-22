import { forwardRef } from 'react';

const UL = forwardRef(({ className, children }, ref) => {
  return (
    <ul ref={ref} className={`${className} h-full`}>
      {children}
    </ul>
  );
});

export default UL;
