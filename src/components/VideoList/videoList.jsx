import React from 'react';

const VideoList = (props) => {

    const handleClick = video => {
        props.selectVideo(video);
    }

    return (
        <div className="container">
            <div className="row">
                {props.videos.map((video) => 
                    <div className="card card-cascade wider col-sm">
                        <div className="view view-cascade overlay">
                            <button onClick={() => handleClick(video)}>
                                <img className="card-img-top" src={video.snippet.thumbnails.high.url} alt="Card image cap"/>
                                <div className="mask rgba-white-slight"></div>
                                </button>
                        </div>
                        <div className="card-body card-body-cascade text-center">
                            <p className="card-title"><strong>{video.snippet.title.substring(0, 30)}</strong></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VideoList;
