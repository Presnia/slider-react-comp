import React from "react";
import SliderImage from "../SliderData/SliderData";
import "./Dots.css";

const Dots = (props) => {
  return <div className="all-dots">
    {SliderImage.map((slide, index) => (
      <span
        key={index}
        className={`${
          props.activeIndex === index ? "dot active-dot" : "dot"
        }`}
        onClick={event => props.onClick(event.target.value = index)}
      ></span>
    ))}
  </div>;
};

export default Dots;