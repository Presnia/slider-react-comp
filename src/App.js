import React from "react";
import {hot} from "react-hot-loader";
import SliderPage from "./components/SliderPage/SliderPage";
import "./App.css";

const App = () => {

    return(
      <>
        <div className="slider-header">
          <h1>My favourite pics</h1>
        </div>
        <div className="slider">
          <SliderPage />
        </div>
      </>
    );
}

export default hot(module)(App);