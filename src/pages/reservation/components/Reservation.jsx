import { useState } from 'react';
import { validateReservation } from '../../../utils/validation';
import Button from '../../../components/ui/Button';
import FormLabel from '../../../components/ui/FormLabel';
import Header from '../../../components/Header';
import DateSelect from '../../../components/DateSelect';
import Footer from '../../../components/Footer';
import ErrorText from '../../../components/ErrorText';

const Reservation = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const fieldErrors = validateReservation(form);
    if (Object.keys(fieldErrors).length > 0) {
      setError(fieldErrors);
      console.log(fieldErrors);
    } else {
      setError({});
    }
  };

  return (
    <div>
      <Header route="reservation" />
      <div className="mx-[5%] lg:mx-[2%] ">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-10 pb-20 lg:py-24"
        >
          <div className="flex flex-col lg:flex-row gap-10">
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
                label="Email"
                inputType="email"
                inputName="email"
                onChange={handleChange}
              />
              {error.email && <ErrorText>{error.email}</ErrorText>}
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
          </div>
          <div className="relative flex flex-col lg:flex-row gap-10">
            <div className="w-full">
              <DateSelect setForm={setForm} reservation />
              {error.date && <ErrorText>{error.date}</ErrorText>}
            </div>
            <div className="w-full">
              <FormLabel
                label="Time"
                inputType="time"
                inputName="time"
                onChange={handleChange}
              />
              {error.time && <ErrorText>{error.time}</ErrorText>}
            </div>
            <div className="w-full">
              <FormLabel
                label="Guests"
                inputType="guests"
                inputName="guests"
                onChange={handleChange}
              />
              {error.guests && <ErrorText>{error.guests}</ErrorText>}
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
            <div>
              <Button large contact className="text-base 2xl:text-2xl ">
                Send!
              </Button>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Reservation;
