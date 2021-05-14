import React from "react";
import SliderImage from "../SliderData/SliderData";
import './Card.css';

const Card = ({ activeIndex, onClickCard }) => {
  const handleClickCard = () => {
    const card = document.querySelector('.slider-section');
    const sliderContainer = document.querySelector('.slider-container');

    card.classList.remove('active');
    card.classList.add('inactive');
    sliderContainer.classList.remove('inactive');
    sliderContainer.classList.add('active');
  };

  return (
    <section className="slider-section">{SliderImage.map((slide, index) =>
      <div key={index}
           className={`card ${index === activeIndex ? "slides inactive" : "active"}`}
           onClick={event => onClickCard(event.target.value = index)}
           onDoubleClick={handleClickCard}
      >
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