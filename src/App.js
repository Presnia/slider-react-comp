import React from "react";
import {hot} from "react-hot-loader";
import Card from "./components/Card/Card.js";

import "./App.css";

const App = () => {
    return(
      <div className="slider">
        <h1> Hello, World! </h1>
        <Card />
      </div>
    );
}

export default App;