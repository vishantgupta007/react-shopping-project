import React from "react";
import Slider from "../../components/ImageSlider/Slider";
import { images } from "../../data";
import ProductCard from "../../components/Card/ProductsCard";

// This is the homepage where the slider component is rendered  and Productscart is Displayed while importing the necessary data from data folder and reendering in the respective components

const HomePage = () => {
  return (
    <>
      {/* importing the slides data from data folder and passing it to the Slider component */}
      <Slider slides={images} />
      <ProductCard />
    </>
  );
};

export default HomePage;
