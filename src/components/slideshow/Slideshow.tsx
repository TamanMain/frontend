import React from "react";
import { Link } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./slideshow.css";

class Slideshow extends React.Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showArrows={false}
        statusFormatter={(current, total) => `${current}/${total}`}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={false}
      >
        <Link to="/search?p=fruits">
          <img src={"/images/slideshow/fruits.jpg"} alt="" />
        </Link>
        <Link to="/search?p=vegetables">
          <img src={"/images/slideshow/vegetables.jpg"} alt="" />
        </Link>
        <Link to="/search?p=organic">
          <img src={"/images/slideshow/organic.jpg"} alt="" />
        </Link>
        <Link to="/search?p=fish">
          <img src={"/images/slideshow/fish.jpg"} alt="" />
        </Link>
      </Carousel>
    );
  }
}

export default Slideshow;
