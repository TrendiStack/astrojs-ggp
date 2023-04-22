import LocationNav from './nav/LocationNav';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0 w-full pb-2 text-md 2xl:text-lg">
      <p>© Gelato Gelato / All Rights Reserved</p>

      <LocationNav className="text-md 2xl:text-xl" />

      <a href="https://github.com/TrendiStack" target="_blank">
        Designed by TrendiStack
      </a>
    </footer>
  );
};

export default Footer;
