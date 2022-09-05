import "../styles/youtubeVideo.scss";
import VideoUrlConverter from "../util/VideoLinkConverter";

function YouTubeVideo(props:any){    
  return <iframe
    src = {VideoUrlConverter(props.src)}
    //className="cust_video"
    width = "720"
    height = "400"
    frameBorder="2"
    allow="accelerometer; autoplay; clipboakrd-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded Youtube"
  />
};
  
  export default YouTubeVideo;