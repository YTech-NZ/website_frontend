const VideoUrlConverter = (url: String) => {
    var parts = url.split('=');
    var vid_id = parts[parts.length - 1];
    var output = "https://www.youtube.com/embed/" + vid_id;
    return output;
}

export default VideoUrlConverter