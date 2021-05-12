import React from "react";
import Card from "../Card/Card";
import alone from "../../assets/img/alone.jpeg";
import camomile from "../../assets/img/camomile.jpg";
import mountain from "../../assets/img/mountain.jpeg";
import rock from "../../assets/img/rock.jpeg";
import waterfall from "../../assets/img/waterfall.jpeg";
import './SliderPage.css';

const images = [
  alone,
  camomile,
  mountain,
  rock,
  waterfall
];

const SliderPage = () => {
  return (
    <>
      <section className="slider-wrapper">
        {
          images.map(pics => <Card img={pics}/>)
        }
      </section>
    </>
  );
};

export default SliderPage;