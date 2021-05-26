import React, { useState, useEffect} from 'react';

const VideoPlayer = (props) => {
    console.log(props);
    let url = "https://www.youtube.com/embed/" + props.video// + "?autoplay=1&origin=http://example.com"
    console.log(url)
 
    return (
        <div>
            <iframe title="video" id="ytplayer" type="text/html" width="640" height="360" src={props.video} frameBorder="0"></iframe>  
        </div>
    );
}

export default VideoPlayer;
