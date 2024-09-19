import React from "react";
import { Link } from "react-router-dom";

const UserNotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-80 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">User Not Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find the user you were looking for. Please check the
            username or try again.
          </p>
          <Link
            to="/auth/login"
            className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Go to Login Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserNotFound;
