import React from "react";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
