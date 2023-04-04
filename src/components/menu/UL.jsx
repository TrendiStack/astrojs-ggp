const UL = ({ children, className, setIsHovered }) => {
  return (
    <>
      <ul
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${className} text-base md:text-2xl lg:text-6xl uppercase overflow-y-scroll lg:h-[300px] hidescrollbar`}
      >
        {children}
      </ul>
    </>
  );
};

export default UL;
