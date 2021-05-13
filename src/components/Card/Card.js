import React from "react";
import './Card.css';

const Card = ({ slide, index }) => {
  return (
    <div key={index} className="card">
      <div className="card-wrapper">
        <div className="image-wrapper">
          <img className="image" src={slide.urls} alt="slider image"/>
        </div>
        <section className="slide-description">
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </section>
      </div>
    </div>
  );
};

export default Card;