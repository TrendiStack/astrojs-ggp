import { useEffect, useState } from 'react';
import { validateContact } from '../utils/validation';
import Footer from './Footer';
import Button from './ui/Button';
import FormLabel from './ui/FormLabel';
import ErrorText from './ErrorText';

const Contact = () => {
  const [pathname, setPathname] = useState('');
  const [form, setForm] = useState({
    subject: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    subject: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const fieldErrors = validateContact(form);
    if (Object.keys(fieldErrors).length > 0) {
      setError(fieldErrors);
      console.log(fieldErrors);
    } else {
      setError({});
    }
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    setPathname(pathname);
  }, []);
  return (
    <div
      className={`
      ${pathname === '/contact' ? '' : 'fixed '}
      
      bottom-0 
      left-0 
      z-0 
      flex 
      flex-col 
      justify-between 
      w-full 
      min-h-screen 
      text-[#252422] 
      font-medium 
      px-[5%] 
      lg:px-[2%]
      pt-40 
      spartan
      `}
    >
      <h1 className=" spartan text-center text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl">
        Let's Connect and Keep the Flavour Going!
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-10 lg:gap-14"
      >
        <div className="w-full">
          <FormLabel
            label="Subject"
            inputType="subject"
            inputName="subject"
            onChange={handleChange}
          />
          {error.subject && <ErrorText>{error.subject}</ErrorText>}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          <div className="w-full">
            <FormLabel
              label="Name"
              inputType="name"
              inputName="name"
              onChange={handleChange}
            />
            {error.name && <ErrorText>{error.name}</ErrorText>}
          </div>
          <div className="w-full">
            <FormLabel
              label="Phone"
              inputType="phone"
              inputName="phone"
              onChange={handleChange}
            />
            {error.phone && <ErrorText>{error.phone}</ErrorText>}
          </div>
          <div className="w-full">
            <FormLabel
              label="Email"
              inputType="email"
              inputName="email"
              onChange={handleChange}
            />
            {error.email && <ErrorText>{error.email}</ErrorText>}
          </div>
        </div>
        <div className="w-full">
          <FormLabel
            label="Message"
            inputType="message"
            inputName="message"
            onChange={handleChange}
          />
          {error.message && <ErrorText>{error.message}</ErrorText>}
        </div>
        <div>
          <Button large submit className="text-base 2xl:text-2xl">
            Send!
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
