import React from "react";
import {hot} from "react-hot-loader";
import SliderPage from "./components/SliderPage/SliderPage";
import "./App.css";

const App = () => {

    return(
      <div className="slider">
        <h1>Slider</h1>
        <SliderPage />
      </div>
    );
}

export default hot(module)(App);