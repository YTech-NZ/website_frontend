import "../styles/image.scss";
import ImageUrlConverter from "../util/ImageLinkConverter";

// This function takes in the props object and converts the url into a usable form for website display. 
function Image(props: any) {
  return <img className="cust-image" alt="YTech NZ drive" src={ImageUrlConverter(props.src)}/>
}

export default Image