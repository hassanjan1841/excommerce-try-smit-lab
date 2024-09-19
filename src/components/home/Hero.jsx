import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Welcome to Our Store</h2>
        <p className="mt-4">Find the best products at unbeatable prices!</p>
        <Link
          to="#products"
          className="mt-8 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
