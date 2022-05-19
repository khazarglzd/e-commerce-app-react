import React from "react";
import Head from "./Head";
import Search from "./Search";
import "./Header.css";
import Navbar from "./Navbar";

const Header = (cardItem) => {
  return (
    <>
      <Head />
      <Navbar />
      <Search cardItem={cardItem} />
    </>
  );
};

export default Header;
