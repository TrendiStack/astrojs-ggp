import hero from '../../assets/images/gelatogelatopizzeria_hero_.png';
import Button from '../ui/Button';

const Banner = () => {
  return (
    <div className="flex flex-col gap-14 md:gap-24 text-center mt-36 sm:mt-48 md:mt-52 xl:mt-48 2xl:mt-96">
      <h1 className="header-secondary font-medium">
        Made
        <br /> Fresh daily
      </h1>
      <img
        src={hero}
        alt="hero"
        className="w-full h-[50%] lg:h-[600px] object-cover"
      />
      <div className="px-[5%] lg:px-[2%]">
        <p className="large-text">
          With over 20 years of hand-crafting sweet and savory creations, Gelato
          Gelato Pizzeria has long been considered Vaughan's go-to spot for
          gelato and pizza.
        </p>
        <Button large className="mt-14 md:mt-20">
          menu
        </Button>
      </div>
    </div>
  );
};

export default Banner;
