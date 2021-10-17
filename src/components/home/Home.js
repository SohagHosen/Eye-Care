import React from "react";
import ChooseUs from "../chooseUs/ChooseUs";
import HeroSection from "../heroSection/HeroSection";
import Services from "../services/Services";

function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <ChooseUs />
    </main>
  );
}

export default Home;
