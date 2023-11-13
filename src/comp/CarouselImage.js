import { useState } from "react";

const ExampleCarouselImage = (props) => {
  return (
    <div className="carousel-image">
      <img src={props.pic} className="carousel-image-single" alt="Carousel" />
    </div>
  );
};
export default ExampleCarouselImage;
