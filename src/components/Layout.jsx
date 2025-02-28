import React from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // Ana sayfa kontrolü

  return (
    <div>
      <Navbar /> {/* Her zaman render edilir */}
      <main>{children}</main> {/* Sayfalar burada render edilir */}
      {!isHome && <Footer />} {/* Footer, Home dışında render edilir */}
    </div>
  );
};

export default Layout;
