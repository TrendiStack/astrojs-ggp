import HoursOfOperation from './HoursOfOperation';
import AddressHeader from './AddressHeader';
import PageLayout from './PageLayout';

const Footer = () => {
  return (
    <footer className="pt-[70vh] bg-white rounded-b-3xl lg:rounded-b-[6rem] pb-32">
      <div className="grid grid-cols-1 gap-14 lg:gap-56">
        <AddressHeader />
        <div>
          <PageLayout>
            <HoursOfOperation />
          </PageLayout>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
