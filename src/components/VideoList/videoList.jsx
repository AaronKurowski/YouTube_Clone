import React from 'react';

const VideoList = (props) => {

    const handleClick = video => {
        props.selectVideo(video);
    }

    return (
        <div class="container">
            <div class="row">
                {props.videos.map((video) => 
                    <div class="card card-cascade wider col-sm" style={{width: 15 + "rem"}}>
                        <div class="view view-cascade overlay">
                            <button onClick={() => handleClick(video)}>
                                <img class="card-img-top" src={video.snippet.thumbnails.default.url} alt="Card image cap"/>
                                <div class="mask rgba-white-slight"></div>
                                </button>
                        </div>
                        <div class="card-body card-body-cascade text-center">
                            <p class="card-title"><strong>{video.snippet.title}</strong></p>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default VideoList;
