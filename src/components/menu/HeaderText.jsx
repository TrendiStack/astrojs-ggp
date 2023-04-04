const HeaderText = ({ children, type, className }) => {
  return (
    <>
      {type === 'h1' ? (
        <h1 className={`${className} text-4xl font-bold`}>{children}</h1>
      ) : type === 'h2' ? (
        <h2 className={`${className} text-3xl font-bold`}>{children}</h2>
      ) : type === 'h3' ? (
        <h3 className={`${className} text-2xl font-bold`}>{children}</h3>
      ) : null}
    </>
  );
};

export default HeaderText;
