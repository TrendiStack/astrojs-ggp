import FooterNav from './FooterNav';
import PageLayout from './PageLayout';
import Button from './ui/Button';
import FormLabel from './ui/FormLabel';

const Contact = () => {
  return (
    <div
      className="
      fixed 
      bottom-0 
      left-0 
      z-[-1] 
      flex 
      flex-col 
      justify-between 
      w-full 
      min-h-screen 
      text-[#252422] 
      font-medium 
      px-[5%] 
      lg:px-[2%]
      pt-40 "
    >
      <h1 className="uppercase spartan text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
        Let's Connect and Keep the Flavor Going!
      </h1>
      <form className="grid grid-cols-1 gap-5 lg:gap-14">
        <FormLabel label="Subject" inputType="subject" inputName="subject" />
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-20">
          <FormLabel label="Name" inputType="name" inputName="name" />
          <FormLabel label="Phone" inputType="phone" inputName="phone" />
          <FormLabel label="Email" inputType="email" inputName="email" />
        </div>
        <FormLabel label="Message" inputType="message" inputName="message" />
        <div>
          <Button large contact className="text-base md:text-2xl ">
            Send!
          </Button>
        </div>
      </form>
      <div className="flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0 w-full pb-2 text-md lg:text-lg">
        <p>© Gelato Gelato / All Rights Reserved</p>

        <FooterNav className="text-md lg:text-xl" />

        <a href="https://github.com/TrendiStack" target="_blank">
          Designed by TrendiStack
        </a>
      </div>
    </div>
  );
};

export default Contact;
