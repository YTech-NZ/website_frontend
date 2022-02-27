import "../styles/youtube_video.scss";

function YouTubeVideo(props:any){
  
  var url = props.src;
  
  //  Split url to get video's embedded ID. 
  var parts = url.split('=');
  var vid_id = parts[parts.length-1];
    
  return <iframe
    src = {`https://www.youtube.com/embed/${vid_id}`}
    //className="cust_video"
    width = "720"
    height = "400"
    frameBorder="2"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded Youtube"
  />
};
  
  export default YouTubeVideo;