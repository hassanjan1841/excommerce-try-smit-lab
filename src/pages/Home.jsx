import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />
      {/* Products Section */}
    </>
  );
};

export default Home;
