import React, {Fragment, useState} from "react";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";
import './SliderPage.css';

const SliderPage = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Fragment>
      <Card activeCard={activeCard}
            onClickCard={activeCard => setActiveCard(activeCard)} />
      <Slider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </Fragment>
  );
};

export default SliderPage;