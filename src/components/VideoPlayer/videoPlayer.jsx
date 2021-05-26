import React, { useState, useEffect} from 'react';

const VideoPlayer = (props) => {
    let url = "https://www.youtube.com/embed/" + props.video// + "?autoplay=1&origin=http://example.com" 
    return (
        <iframe id="ytplayer" type="text/html" width="640" height="360" src={url} frameborder="0"></iframe>
    );
}

export default VideoPlayer;
