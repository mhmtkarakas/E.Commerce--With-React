import React from "react";
import NewCollections from "../Components/NewCollections/NewCollections";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import Hero from "./../Components/Hero/Hero";
import NewsLetter from "../Components/NewsLetter.jsx/NewsLetter";


const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
     
    </div>
  );
};

export default Shop;
