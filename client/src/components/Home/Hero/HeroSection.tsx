import { companies } from "../../../contants";
import HeroCTAButton from "../../Buttons/HeroCTAButton";
import HeroCompany from "./HeroCompany";
import Lottie from "lottie-react";
import animationData from "../../../../src/assets/lottie/animation_llpgw5p0.json";

const HeroSection = () => {
  return (
    <section className="rounded-lg w-full flex flex-col sm:flex-row transition-all duration-500 delay-100 ease-in-out">
      <article className="flex-1 flex flex-col items-start justify-center gap-20 p-5 lg:px-20">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h1 className="text-[2rem] capitalize font-bold text-light-primary dark:text-dark-primary">
            DevConnect
          </h1>
          <p className="text-base font-normal text-light-primary dark:text-dark-primary">
            We connect junior developers with{" "}
            <br />
            low-paid real-world projects
          </p>

          {/* actions */}
          <div className="flex gap-x-10 gap-y-2 sm:gap-14 w-full sm:w-max flex-wrap mt-5">
            <HeroCTAButton
              title="Get Started"
              color="green"
            />
            <HeroCTAButton
              title="View Projects"
              color="white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-normal text-light-muted dark:text-dark-muted">
            Working with the best
          </h2>
          {/* socials */}
          <div className="flex gap-8 text-light-muted dark:text-dark-muted">
            {companies.map(({ name, icon }) => (
              <HeroCompany
                key={name}
                title={name}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </article>
      {/* Image section */}
      <article className="flex-1 flex items-center justify-center">
        <Lottie
          className="w-[80%] h-auto"
          animationData={animationData}
        />
      </article>
    </section>
  );
};

export default HeroSection;
