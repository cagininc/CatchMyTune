// import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link"; // Next.js Link bileşeni kullanımı

const Hero = () => {
  return (
    <section className="relative pt-48 pb-40 max-lg:pt-44 max-lg:pb-36 max-md:pt-32 max-md:pb-32">
      <div className="container">
        <div
          className="relative z-2 max-w-512 max-lg:max-w-388"
          style={{ top: "-70px" }}
        >
          <div
            className="caption small-3 uppercase text-p4"
            style={{
              textShadow:
                "0 0 8px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.9)", // Glow
            }}
          >
          </div>
          <h1 className="mb-4 h1 text-p4 uppercase max-md:mb-4 max-md:text-2xl max-md:leading-8">
            Explore the Rhythm, Key, and Energy of Your Music
          </h1>
          <p className="max-w-440 mb-10 body-1 max-md:mb-8">
            Unleash the hidden layers of your favorite tracks and elevate your
            music journey.
          </p>
          <Link href="#features">
          <Button>Start Exploring</Button>
          </Link>
        </div>
        <div className="absolute top-8 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
          <Image
            className="mt-100"
            src="/images/reelhero.jpeg"
            alt="hero"
            width={1230}
            height={380}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
