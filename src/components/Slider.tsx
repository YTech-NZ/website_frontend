import React, { useState } from "react";
import { SlideImage, StyledSlider } from "./SlideImage";
import LEFT_ARROW from "../assets/left_arrow.png"

import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const Slider = ({ slides }: {slides:any}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      {/* <FaChevronLeft
        className="left-arrow"
        onClick={prevSlide}
        
      /> */}

    <img src={LEFT_ARROW} className="left-arrow" alt="left-arrow"
     onClick={prevSlide}/>

      {/* <FaChevronRight
        className="right-arrow"
        onClick={nextSlide}
      /> */}
      {slides.map((slide: { image: string | undefined; }, index: React.Key | null | undefined) => {
        return (
          <div key={index}>
            {index === current && (
              <SlideImage src={slide.image} alt="" />
            )}
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default Slider;