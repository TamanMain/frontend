import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ImageWide from "../image/image-wide";
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
          <ImageWide imageUrl={"/images/slideshow/fruits.jpg"} />
        </Link>
        <Link to="/search?p=vegetables">
          <ImageWide imageUrl={"/images/slideshow/vegetables.jpg"} />
        </Link>
        <Link to="/search?p=organic">
          <ImageWide imageUrl={"/images/slideshow/organic.jpg"} />
        </Link>
        <Link to="/search?p=fish">
          <ImageWide imageUrl={"/images/slideshow/fish.jpg"} />
        </Link>
      </Carousel>
    );
  }
}

export default Slideshow;
