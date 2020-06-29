import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ImageUltraWide from "../image/image-ultra-wide";
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
          <ImageUltraWide imageUrl={"/images/slideshow/fruits.jpg"} />
        </Link>
        <Link to="/search?p=vegetables">
          <ImageUltraWide imageUrl={"/images/slideshow/vegetables.jpg"} />
        </Link>
        <Link to="/search?p=organic">
          <ImageUltraWide imageUrl={"/images/slideshow/organic.jpg"} />
        </Link>
        <Link to="/search?p=fish">
          <ImageUltraWide imageUrl={"/images/slideshow/fish.jpg"} />
        </Link>
      </Carousel>
    );
  }
}

export default Slideshow;
