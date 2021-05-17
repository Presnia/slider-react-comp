import React, { useState } from "react";
import SliderImage from "../SliderData/SliderData";
import SliderContent from "../SliderContent/SliderContent";
import Arrows from "../Arrows/Arrows";
import Dots from "../Dots/Dots";
import "./Slider.css";

const len = SliderImage.length - 1;

const Slider = ({ activeIndex, setActiveIndex }) => {
  const prevSlide = () => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  const nextSlide = () => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);

  return (
    <div className="slider-container inactive">
      <SliderContent activeIndex={activeIndex} />
      <Arrows
          prevSlide={() => prevSlide()}
          nextSlide={() => nextSlide()}
      />
      <Dots activeIndex={activeIndex}
          onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
   </div>
  );
};

export default Slider;