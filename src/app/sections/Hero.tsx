// import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-3 uppercase text-p4 ">
              Discover the Secrets of Your Sound with Catch My Tune
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Explore the Rhythm, Key, and Energy of Your Music
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Unleash the hidden layers of your favorite tracks and elevate your music journey.
            </p>
              <Button>Start Exploring</Button>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res" style={{ marginTop: '30px' }}>
            <img
              src="/images/hero3.webp"
              className="size-1240 max-:h-auto"
              alt="hero"
            />
          </div>
        </div>
    </section>
  );
};

export default Hero;
