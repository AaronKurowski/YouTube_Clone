import React, { useState, useEffect} from 'react';

const VideoList = (props) => {
    const [selectedVideo, setSelectedVideo] = useState({})

    const handleClick = (event) => {
        event.preventDefault();
        props.selectVideo(selectedVideo)
    }

    return (
        <div className="container">
            <div className="row">
                {props.videos.map((video) => 
                    <div className="card card-cascade wider col-sm" style={{width: 15 + "rem"}}>
                        <div className="view view-cascade overlay">
                            <button onClick={(video => handleClick(video))}>
                                <img className="card-img-top" src={video.snippet.thumbnails.default.url} alt="Card image cap"/>
                                <div className="mask rgba-white-slight"></div>
                                </button>
                        </div>
                        <div className="card-body card-body-cascade text-center">
                            <p className="card-title"><strong>{video.snippet.title}</strong></p>
                        </div>
                    
                    </div>
                )}
            </div>
        </div>
    )
}

export default VideoList;
