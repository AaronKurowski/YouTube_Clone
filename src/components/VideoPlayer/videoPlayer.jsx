import React, { useState, useEffect} from 'react';

const VideoPlayer = (props) => {
    console.log(props);
    let url = "https://www.youtube.com/embed/" + props.video// + "?autoplay=1&origin=http://example.com"
    debugger;
    console.log(url)
 
    return (
        <div className="col-md-8">
            <iframe id="ytplayer" type="text/html" width="640" height="360" src={url} frameborder="0"></iframe>
        </div>
    );
}

export default VideoPlayer;
