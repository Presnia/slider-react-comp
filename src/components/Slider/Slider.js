import React, { useState } from "react";
import SliderImage from "../SliderData/SliderData";
import Card from "../Card/Card";
import Arrows from "../Arrows/Arrows";
import Dots from "../Dots/Dots";
import "./Slider.css";

const len = SliderImage.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex)

  return (
    <div className="slider-container">
      <Card activeIndex={activeIndex}
            onClickCard={(activeIndex) => setActiveIndex(activeIndex)} />
      <Arrows
      prevSlide={() =>
        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
      nextSlide={() =>
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
      />
      <Dots activeIndex={activeIndex}
          onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
   </div>
  );
};

export default Slider;