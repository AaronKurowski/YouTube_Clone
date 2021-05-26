import React, { useState, useEffect} from 'react';

const VideoList = (props) => {
    return (
        <div class="container">
            <div class="row">
                {props.videos.map((video) => 
                    <div class="card card-cascade wider col-sm" style={{width: 15 + "rem"}}>
                        <div class="view view-cascade overlay">
                            <img class="card-img-top" src={video.snippet.thumbnails.default.url} alt="Card image cap"/>
                            <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                            </a>
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