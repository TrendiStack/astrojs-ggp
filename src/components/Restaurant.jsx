import Button from './ui/Button';

const Restaurant = () => {
  return (
    <div className="grid grid-cols-2">
      <p className="text-7xl w-full justify-self-center">
        Situated in heart of Woodbridge, Gelato Gelato Pizzeria is your ideal
        place to enjoy a night out with friends and family.
      </p>
      <div className="flex flex-col justify-between items-end ">
        <p className="text-2xl font-light spartan w-[60%] text-right">
          Gelato Gelato Pizzeria offers an authentic taste into true Italian
          cuisine. Whether you are coming in for a scoop of fresh gelato or a
          wood-oven Pizza, Gelato Gelato promises to leave you wanting more.
        </p>
        <Button large className="text-5xl">
          Our Home
        </Button>
      </div>
    </div>
  );
};

export default Restaurant;
