import React from "react";
import SliderImage from "../SliderData/SliderData";
import "./Dots.css";

const Dots = ({ activeIndex, onClick }) => {
  return (
    <div className="all-dots">
      {SliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? "dot active-dot" : "dot"
          }`}
          onClick={event => onClick(event.target.value = index)}
        ></span>
      ))}
    </div>);
};

export default Dots;