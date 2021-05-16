import React from "react";
import SliderImage from "../SliderData/SliderData";

const SliderContent = ({ activeIndex }) => {
  const handleClickCard = () => {
    const card = document.querySelector('.slider-section');
    const sliderContainer = document.querySelector('.slider-container');

    card.classList.add('active');
    card.classList.remove('inactive');
    sliderContainer.classList.add('inactive');
    sliderContainer.classList.remove('active');
  };

  return <section>{SliderImage.map((slide, index) =>
    <div
      key={index}
      className={index === activeIndex ? "slides active" : "inactive"}
      onDoubleClick={handleClickCard}
      onTouchEnd={handleClickCard}
    >
      <img className="slide-image" src={slide.urls} alt="slide" />
      <h3 className="slide-title">{slide.title}</h3>
      <p className="slide-text">{slide.description}</p>
    </div>)}
  </section>
};

export default SliderContent;