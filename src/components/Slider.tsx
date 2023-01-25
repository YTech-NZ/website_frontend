import { useEffect, useState } from "react";
import "../styles/splash.scss";
import LEFT_ARROW from "../assets/left_arrow.png"
import RIGHT_ARROW from "../assets/right_arrow.png"

const Slider = ({ slides }: { slides: any }) => {
  const [marginInnerLeft, setMarginInnerLeft] = useState(-window.innerWidth);
  const [marginOuterLeft, setMarginOuterLeft] = useState(0);

  const nextSlide = () => {
    if (((marginInnerLeft/ (-1 * window.innerWidth)))  % slides.length == 0){
      setMarginOuterLeft(marginOuterLeft + (slides.length * window.innerWidth));
    } 
    setMarginInnerLeft(marginInnerLeft - window.innerWidth);
  };

  const prevSlide = () => {
    if (((marginInnerLeft/ (-1 * window.innerWidth)))  % slides.length == 0){
      setMarginOuterLeft(marginOuterLeft - (slides.length * window.innerWidth));
    } 

    setMarginInnerLeft(marginInnerLeft + window.innerWidth);
  };

  return (
    <div className="carousel"style={{ marginLeft: `${marginOuterLeft}px` }}>
      <div className="carousel__inner" style={{ marginLeft: `${marginInnerLeft}px` }}>

        <img src={LEFT_ARROW} className="leftArrow" height="35px" width="25px"
          onClick={prevSlide} />

        <img src={RIGHT_ARROW} className="rightArrow" height="35px" width="25px"
          onClick={nextSlide} />

        <div className="carousel__inner__image" key={-1}>
              <img src={slides[slides.length - 1].image} alt="" />
        </div>

        {slides.map((slide: { image: any; }, index: any) => {
          return (
            <div className="carousel__inner__image" key={index}>
              <img src={slide.image} alt="" />
            </div>
          );
        })}

        <div className="carousel__inner__image" key={slides.length}>
              <img src={slides[0].image} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Slider;