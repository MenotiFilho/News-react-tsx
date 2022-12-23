import HeroImage from "../images/HERO IMAGE.svg";

function Hero() {
  return (
    <div className="">
      <div className="flex  flex-col container gap-5">
        <img src={HeroImage} className="flex w-full" alt="Hero" />

        <div className="flex w-full justify-between">
          <div className="flex text-6xl font-extrabold font-inter container w-5/12">
            The Bright Future of Web 3.0?
          </div>
          <div className=" flex flex-col container w-1/2 justify-between">
            <div className="text-base font-normal font-inter text-dark-grayish-blue">
              We dive into the next evolution of the web that claims to put the
              power of the plataforms back into the hands of the people. But is
              it really fulfilling its promise?
            </div>
            <div>
              <button className="hover:bg-black bg-soft-red rounded-none font-inter text-base font-bold tracking-button py-4">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
