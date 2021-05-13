import React from "react";
import Card from "../Card/Card";
import SliderImage from "../SliderData/SliderData.js";
import './SliderPage.css';

const SliderPage = () => {
  return (
    <>
      <section className="slider-wrapper">
        {
          SliderImage.map((slide, index) => <Card key={index} slide={slide}/>)
        }
      </section>
    </>
  );
};

export default SliderPage;