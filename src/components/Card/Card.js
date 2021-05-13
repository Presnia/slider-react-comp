import React from "react";
import SliderImage from "../SliderData/SliderData";
import './Card.css';

const Card = ({ activeIndex, onClickCard }) => {
  return (
    <section className="slider-section">{SliderImage.map((slide, index) =>
      <div key={index}
           className={`card ${index === activeIndex ? "slides active" : "inactive"}`}
           onClick={event => onClickCard(event.target.value = index)}>
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
      </div>)}
    </section>
  );
};

export default Card;