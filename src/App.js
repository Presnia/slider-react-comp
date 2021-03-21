import React from "react";
import {hot} from "react-hot-loader";
import Card from "./components/Card/Card.js";
import alone from '../src/assets/img/alone.jpeg';
import camomile from '../src/assets/img/camomile.jpg';
import mountain from '../src/assets/img/mountain.jpeg';
import rock from '../src/assets/img/rock.jpeg';
import waterfall from '../src/assets/img/waterfall.jpeg';

import "./App.css";

const App = () => {

  const images = [
    alone,
    camomile,
    mountain,
    rock,
    waterfall
  ];

    return(
      <div className="slider">
        <h1>Slider</h1>
        <section className="slider-wrapper">
          {
            images.map(pics => <Card img={pics}/>)
          }
        </section>
      </div>
    );
}

export default hot(module)(App);