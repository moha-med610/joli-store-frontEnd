import React from "react";
import Nav from "../components/Home/Nav";
import Hero from "../components/Home/Hero";
import Contact from "../components/Home/Contact";
import Footer from "../components/Home/Footer";
import Testimonials from "../components/Home/Testimonials";
import AddTestimonial from "../components/Home/AddTestimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Contact />
      <AddTestimonial />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
