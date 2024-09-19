import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>© 2024 My E-Commerce. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link to="#" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
