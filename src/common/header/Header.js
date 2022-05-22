import React from "react";
import Head from "./Head";
import Search from "./Search";
import "./Header.css";
import Navbar from "./Navbar";

const Header = (CartItem) => {
  return (
    <>
      <Head />
      <Navbar />
      <Search CartItem={CartItem} />
    </>
  );
};

export default Header;
