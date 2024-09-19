import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to={"/"}>My E-Commerce</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/products" className="text-gray-600 hover:text-blue-500">
            Products
          </Link>
          <Link to="contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </Link>
          <Link to="/auth/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
          <Link to="/auth/signup" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
