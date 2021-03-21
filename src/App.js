import React from "react";
import {hot} from "react-hot-loader";
import Card from "./components/Card/Card.js";

import "./App.css";

const App = () => {
    return(
      <div className="slider">
        <section className="slider-wrapper">
          <Card />
        </section>
      </div>
    );
}

export default hot(module)(App);