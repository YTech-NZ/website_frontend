  import { useState } from "react";
  import { SlideImage, StyledSlider } from "./SlideImage";
  import "../styles/splash.scss";
  import LEFT_ARROW from "../assets/left_arrow.png"
  import RIGHT_ARROW from "../assets/right_arrow.png"

  const Slider = ({ slides }:{slides: any}) => {
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

        <img src={LEFT_ARROW} className="leftArrow" height="65px" width="65px"
            onClick={prevSlide}/>

        <img src={RIGHT_ARROW} className="rightArrow" height="65px" width="65px" 
            onClick={nextSlide}/>

        {slides.map((slide: { image: any; }, index:any) => {
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