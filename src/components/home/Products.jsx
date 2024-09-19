import React from "react";

const Products = () => {
  return (
    <section id="products" className="container mx-auto my-16">
      <h3 className="text-3xl font-bold text-center mb-8 text-black">
        Featured Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="h-48 w-full object-cover rounded"
          />
          <h4 className="text-xl font-semibold mt-4 text-black">Product 1</h4>
          <p className="mt-2 text-gray-600">$99.99</p>
          <Link
            to="#"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add to Cart
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="h-48 w-full object-cover rounded"
          />
          <h4 className="text-xl font-semibold mt-4 text-black">Product 2</h4>
          <p className="mt-2 text-gray-600">$79.99</p>
          <Link
            to="#"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add to Cart
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="h-48 w-full object-cover rounded"
          />
          <h4 className="text-xl font-semibold mt-4 text-black">Product 3</h4>
          <p className="mt-2 text-gray-600">$49.99</p>
          <Link
            to="#"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add to Cart
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="h-48 w-full object-cover rounded"
          />
          <h4 className="text-xl font-semibold mt-4 text-black">Product 4</h4>
          <p className="mt-2 text-gray-600">$29.99</p>
          <Link
            to="#"
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add to Cart
          </Link>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to="#" className="text-black hover:text-gray-700 font-semibold">
          See All Products
        </Link>
      </div>
    </section>
  );
};

export default Products;
