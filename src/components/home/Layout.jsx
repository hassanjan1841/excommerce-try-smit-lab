import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "../../../context/AuthContext";
import UserNotFound from "../auth/userNotFound";
const Layout = () => {
  const { user } = useAuth();
  if (!user) return <UserNotFound />;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
