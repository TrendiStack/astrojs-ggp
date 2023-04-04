const PageLayout = ({ children, className, noLayout }) => {
  const styles = {
    container: 'container mx-auto px-[5%] lg:px-[2%]',

    noLayout: '',
  };

  return (
    <div
      className={`${className}
      ${noLayout ? styles.noLayout : styles.container}
      ${styles.paddingX} bg-transparent`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
