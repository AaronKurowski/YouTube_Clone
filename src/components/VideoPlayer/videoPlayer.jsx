import React, { useState, useEffect} from 'react';

const VideoPlayer = (props) => {
    try{
        let url = "https://www.youtube.com/embed/" + props.video.id.videoId// + "?autoplay=1&origin=http://example.com" 
        return (
            <iframe id="ytplayer" type="text/html" width="640" height="360" src={url} frameBorder="0"></iframe>
        );
    }
    catch{
        let url = "https://www.youtube.com/embed/" + "-w-58hQ9dLk"// + "?autoplay=1&origin=http://example.com" 
        return (
            <iframe id="ytplayer" type="text/html" width="640" height="360" src={url} frameBorder="0"></iframe>
        );
    }
    
}

export default VideoPlayer;
