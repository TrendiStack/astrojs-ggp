import HoursOfOperation from '../menu/HoursOfOperation';
import AddressHeader from '../landing/AddressHeader';

const Footer = () => {
  return (
    <section className="pt-[70vh] pb-32">
      <div className="grid grid-cols-1 gap-14 lg:gap-36 2xl:gap-56">
        <AddressHeader />
        <div className="container mx-auto px-[5%] lg:px-[2%]">
          <HoursOfOperation />
        </div>
      </div>
    </section>
  );
};

export default Footer;
