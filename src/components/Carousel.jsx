import slideshow from '../assets/videos/ggpslidshow.mp4';
const Carousel = () => {
  return (
    <div
      className="
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:h-screen"
    >
      <div
        className="
        flex 
        items-center 
        justify-center 
        text-center 
        large-text 
        lg:mx-20 
        h-[20vh] 
        lg:h-full
        px-[5%] lg:px-[2%]
      "
      >
        <p>
          Satisfy your cravings with the mouthwatering flavors of Sicily, made
          fresh every day.
        </p>
      </div>
      <video
        src={slideshow}
        className="
        mb-14 
        md:mb-0 
        h-[50vh] 
        lg:h-full 
        w-full 
        object-cover 
        order-first
        md:order-last"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://www.ggpizza.com/wp-content/uploads/2021/04/IMG_20210409_153000.jpg"
      />
    </div>
  );
};

export default Carousel;
