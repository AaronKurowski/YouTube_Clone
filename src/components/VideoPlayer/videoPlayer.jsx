import React from 'react';
import './videoPlayer.css';

const VideoPlayer = (props) => {
    // This try/catch will handle setting changing the selected video, if the try fails it will render the default video
    try{
        let url = "https://www.youtube.com/embed/" + props.video.id.videoId 
        return (
            <div className="video-content">
                <iframe className="vid-frame" id="ytplayer" type="text/html" width="640" height="360" src={url} frameBorder="0"></iframe>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-8">
                        <h3>{props.video.snippet.title}</h3>
                        <p>{props.video.snippet.description}</p>
                    </div>
                </div>
            </div>
        );
    }
    catch{
        let url = "https://www.youtube.com/embed/" + "-w-58hQ9dLk" 
        return (
            <div className="video-content">
                <iframe className="vid-frame" id="ytplayer" type="text/html" width="640" height="360" src={url} frameBorder="0"></iframe>
                <div className="video-details-container">
                    <div className="video-details">
                        <h3>Jurassic Park Theme Song (Melodica Cover)</h3>
                        <p>Just got a melodica. Here's my rendition of the Jurassic Park theme song. What do you think?</p>
                    </div>
                </div>
            </div>
        );
    }   
}

export default VideoPlayer;
