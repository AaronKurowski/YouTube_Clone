import React, { useState, useEffect} from 'react';

const VideoPlayer = (props) => {
<<<<<<< HEAD
    console.log(props);
    let url = "https://www.youtube.com/embed/" + props.video// + "?autoplay=1&origin=http://example.com"
    debugger;
    console.log(url)
 
    return (
        <div className="col-md-8">
            <iframe id="ytplayer" type="text/html" width="640" height="360" src={url} frameborder="0"></iframe>
        </div>
=======
    let url = "https://www.youtube.com/embed/" + props.video// + "?autoplay=1&origin=http://example.com" 
    return (
        <iframe id="ytplayer" type="text/html" width="640" height="360" src={url} frameBorder="0"></iframe>
>>>>>>> d33181b0e967f2aadd50ad7dafd47c21449f81b5
    );
}

export default VideoPlayer;
