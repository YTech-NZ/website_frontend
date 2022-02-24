// Convert to a typescript file later. 

// Source code: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2
import React  from "react";
import PropTypes from "prop-types"

const YouTubeEmbed = ({embedId}) => (
    <div className="video-responsive">
      <iframe
        width="600"
        height="400"
        src = {`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  
  YouTubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
  export default YouTubeEmbed;