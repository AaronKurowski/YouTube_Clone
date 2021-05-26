import './App.css';
import axios from 'axios';
import youtubeAPIKey from './APIKEY';
import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/videoPlayer';

class App extends Component {
  state = {
    selectedVideo: null,
    videoList: []
  }
  
  // this will trigger when a user submits a search in the search bar
  handleSubmit = async (searchTerm) => {
    let query = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm +"&key=" + youtubeAPIKey;
    const result = await axios.get(query)
    this.setState({videoList: result.data.items})
    console.log(this)
  }

  // this will trigger when a user clicks one of the related videos
  handleSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render(){
    return(
      <div className="App"> 
        <h1>Welcome to our Youtube Clone!</h1>
        <VideoPlayer video={this.state.selectedVideo} />
      </div> 
    )
  }
}

export default App;