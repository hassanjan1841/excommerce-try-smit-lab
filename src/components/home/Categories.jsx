import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="container mx-auto my-16">
      <h3 className="text-3xl font-bold text-center mb-8">Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold text-black">Electronics</h4>
          <p className="mt-2 text-gray-600">Latest gadgets and devices.</p>
          <Link
            to="#products"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            View Products
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold text-black">Fashion</h4>
          <p className="mt-2 text-gray-600">Trendy clothing and accessories.</p>
          <Link
            to="#products"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            View Products
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold text-black">
            Home &amp; Garden
          </h4>
          <p className="mt-2 text-gray-600">Everything for your home.</p>
          <Link
            to="#products"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
