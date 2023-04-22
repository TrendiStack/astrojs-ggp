const LI = ({ children, className }) => {
  return (
    <li
      className={`${className} text-center py-4 h-[fit-content] px-4 rounded-3xl bg-white `}
    >
      {children}
    </li>
  );
};

export default LI;
