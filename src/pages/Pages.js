import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";

const Pages = ({ productItems, cardItem, addToCard }) => {
  return (
    <>
      <Home cardItem={cardItem} />
      <FlashDeals productItems={productItems} addToCard={addToCard} />
      <TopCate />
      <NewArrivals />
    </>
  );
};

export default Pages;
