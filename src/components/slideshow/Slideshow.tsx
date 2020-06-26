import React from "react";

import fruits from "./images/fruits.jpg";
// import vegetables from "./images/vegetables.jpg";
// import organic from "./images/organic.jpg";
// import fish from "./images/fish.jpg";

import "./slideshow.css";

class Slideshow extends React.Component {
  render() {
    return (
      <div className="slideshow">
        <img src={fruits} alt="" />
        {/* <img src={vegetables} />
        <img src={organic} />
        <img src={fish} /> */}
      </div>
    );
  }
}

export default Slideshow;
