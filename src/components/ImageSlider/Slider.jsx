import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Slider.css";
import { images } from "../../data";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// importing slides as props and rendereing the images
//  using useState for previous and nest slide

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  // letting the length of slides
  const length = slides.length;

  // nextSlide fucntionality
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  //PreviousSlide fucntionality
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const imageSlide = images.map((image) => {
    return (

      // using active className for the fadding effect
      <div
        className={image.id === current ? "slide active" : "slide"}
        key={image.id}
      >
        <NavLink to={image.path}>
          {image.id === current && (
            <img src={image.url} alt="collections" className="image-slider" />
          )}
        </NavLink>
      </div>
    );
  });

  console.log(current);
  return (
    <>
      <div className="image-bg">
        <img src="https://sslimages.shoppersstop.com/sys-master/root/hdd/h7e/31083770085406/NARS_HP_stripeNARS_HP_Strip_WEB--nars--page--2023-09--10_NS-23.jpg" />
      </div>
      <section className="slides">
        <BiLeftArrow className="left-arrow icon" onClick={prevSlide} />
        <BiRightArrow className="right-arrow icon" onClick={nextSlide} />
        <div>{imageSlide}</div>
      </section>
    </>
  );
};

export default Slider;
