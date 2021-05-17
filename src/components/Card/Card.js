import React from "react";
import SliderImage from "../SliderData/SliderData";
import CardItem from "../CardItem/CardItem";
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
           onTouchEnd={handleClickCard}
      >
        <CardItem slide={slide} />
      </div>)}
    </section>
  );
};

export default Card;