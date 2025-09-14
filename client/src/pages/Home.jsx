import React from "react";
import Hero from "../components/Hero.jsx";
import FeaturedDestination from "../components/FeaturedDestination.jsx";
import ExclusiveOffers from "../components/ExclusiveOffers.jsx";
import Testimonial from "../components/Testimonial.jsx";
import NewLetter from "../components/NewLetter.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewLetter/>
    </div>
  );
};

export default Home;
