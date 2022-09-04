import "../styles/splash.scss";
//import Slider from "./Slider"; -- not used for this code
import Slider from "react-slick";
import ImageUrlConverter from "../util/ImageLinkConverter";
import { Component } from "react";

// ImageData is to be refractor later into Data class later on. 

const images = [ 
  {
    id: "1",
    name: "Picture 1",
    alt: "",
    url:ImageUrlConverter("https://drive.google.com/file/d/1E98AHxRPPdzGbyF3kb9AlfEopE1by0sR/view?usp=sharing")
  },
  {
    id: "2",
    name: "Picture 2",
    alt: "",
    url: ImageUrlConverter("https://drive.google.com/file/d/13HETOA40IXaagdMN5Sc_khyyWfKohBKd/view?usp=sharing")
  },
  {
    id: "3",
    name: "Picture 3",
    alt: "",
    url: ImageUrlConverter("https://drive.google.com/file/d/1FPX8leF_8i7oaS_K1j99jZc1L2wR3C5U/view?usp=sharing")
  },
];


class Splash extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
    };

    return (
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="wrapper" key={image.id}>
              <img
                className="sliderImg"
                src={image.url}
                alt={image.alt}
              />
              <p>{image.name}</p>
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default Splash