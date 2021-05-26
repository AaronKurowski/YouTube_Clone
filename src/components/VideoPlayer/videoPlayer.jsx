import React, { useState, useEffect} from 'react';
import axios from 'axios';
import youtubeAPIKey from '../../APIKEY';


const getVideos = async (id) => {
    let response = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + id + "&key=" + youtubeAPIKey)
    console.log(response.data)
}

const VideoPlayer = (props) => {
    // I think I need to make this hook work. Not sure how.
    const [video, setVideo] = useState({});
    let id = "-w-58hQ9dLk"
    let result = useEffect(() => {
        getVideos(id)
    })
    console.log("result: " + result);
    //     axios.get("https://www.googleapis.com/youtube/v3/videos?id=-w-58hQ9dLk&key=" + youtubeAPIKey)
    //         .then(response => setVideo(response.data[props.index]))
    // }, [video, props.index]);  

    //const result = "https://www.youtube.com/embed/-w-58hQ9dLk";
    //const result = axios.get("https://www.googleapis.com/youtube/v3/videos?id=-w-58hQ9dLk&key=" + youtubeAPIKey)
    // console.log(result.data.items[0].id)
    // let videoId = "https://www.googleapis.com/youtube/v3/videos?id=" + result.data.items[0].id;

    return (
        <div>
            <iframe title="video" id="ytplayer" type="text/html" width="640" height="360" src={result} frameBorder="0"></iframe>  
        </div>
    );
}

export default VideoPlayer;
