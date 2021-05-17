import React from "react";
import "./CardItem.css";

const CardItem = ({ slide }) => {
  return (
    <div className="card-wrapper">
      <div className="image-wrapper">
        <img className="image"
             src={slide.urls} alt="slide"/>
      </div>
      <section className="slide-description">
        <h3>{slide.title}</h3>
        <p>{slide.description}</p>
      </section>
    </div>
  );
};

export default CardItem;