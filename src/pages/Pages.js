import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";

const Pages = ({ productItems, cardItem, addToCard }) => {
  return (
    <>
      <Home cardItem={cardItem} />
      <FlashDeals productItems={productItems} addToCard={addToCard} />
      <TopCate />
    </>
  );
};

export default Pages;
