import "../styles/youtubeVideo.scss";
import VideoUrlConverter from "../util/VideoLinkConverter";

function YouTubeVideo(props:any){    
  return <iframe
    src = {VideoUrlConverter(props.src)}
    className="custVideo"
    width = "720"
    height = "400"
    allow="accelerometer; autoplay; clipboakrd-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
};
  
  export default YouTubeVideo;