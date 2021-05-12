import React from "react";
import './Card.css';

const Card = ({ img }) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="image-wrapper">
          <img className="image" src={img} alt="slider image"/>
        </div>
        <section className="slide-description">
          <h2>This is slide image</h2>
          <p>Some description</p>
        </section>
      </div>
    </div>
  );
};

export default Card;