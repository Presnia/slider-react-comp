import React, {Fragment, useState} from "react";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";
import './SliderPage.css';

const SliderPage = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <Fragment>
      <Card activeCard={activeCard}
            onClickCard={activeCard => setActiveCard(activeCard)}/>
      <Slider />
    </Fragment>
  );
};

export default SliderPage;