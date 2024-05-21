import React from "react";
import Hero from "../components/Hero";

const LandingPage: React.FC = () => {
  return (
    <div className="px-3 py-2 h-dvh bg-teal-400/75 flex-col items-center justify-center">
      <Hero ctaText="Your music collection, all in one place!" />
    </div>
  );
};

export default LandingPage;
