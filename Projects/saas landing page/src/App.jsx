import React from "react";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Features from "./sections/Features";
import { Pricing } from "./sections/Pricing ";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero></Hero>
      <Features></Features>
      <Pricing/>
    </main>
  );
};

export default App;
