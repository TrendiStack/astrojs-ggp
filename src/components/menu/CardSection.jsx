import { forwardRef } from 'react';

const CardSection = forwardRef(({ className, children }, ref) => {
  return (
    <section
      ref={ref}
      className={` ${className} lg:absolute top-0 left-0 transform lg:h-screen w-full lg:rounded-b-[6rem]`}
    >
      {children}
    </section>
  );
});

export default CardSection;
