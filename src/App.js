import './App.css';
import axios from 'axios';
import youtubeAPIKey from './APIKEY';
import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/videoPlayer';
import Search from './components/SearchBar/searchBar.jsx';

class App extends Component {
  state = {
    selectedVideoId: "-w-58hQ9dLk",
    videoList: []
  }
  
  // this will trigger when a user submits a search in the search bar
  handleSubmit = async (searchTerm) => {
    let query = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm + "&key=" + youtubeAPIKey;
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
      <div className="App container-fluid"> 
          <Search handleSearch={this.handleSubmit}/>
          <h1>Welcome to our Youtube Clone!</h1>
        <div className="row">
          <div className="col-md-8">
            <VideoPlayer video={this.state.selectedVideoId} />
          </div>
          <div className="col-md-4">
            <p>comments will go here</p>
          </div>
          
        </div>
        <div className="row">
          <p>Related videos in this row</p>
        </div>
      </div>
    )
  }
}

export default App;