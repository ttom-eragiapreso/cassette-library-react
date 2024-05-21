import React from "react";
import { FaAddressBook } from "react-icons/fa6";
import CtaButton from "./CtaButton";

interface HeroProps {
  ctaText: string;
}

const ctaAction = () => {
  console.log("You've clicked on the cta button!");
};

const Hero: React.FC<HeroProps> = ({ ctaText }) => {
  return (
    <div className="border border-black rounded-lg px-4 py-52 bg-sky-600/60 flex flex-col items-center justify-center">
      <p className="text-8xl text-center">{ctaText}</p>
      <CtaButton
        ctaFunction={ctaAction}
        text="Login or Register now!"
        iconPosition="after"
        icon={<FaAddressBook className="h-auto" />}
      />
    </div>
  );
};

export default Hero;
