import './App.css';
import axios from 'axios';
import youtubeAPIKey from './APIKEY';
import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/videoPlayer';
import Search from './components/SearchBar/searchBar.jsx';
import Comments from './components/Comments/comments.jsx';

class App extends Component {
  state = {
    selectedVideoId: "-w-58hQ9dLk",
    videoList: []
  }
  
  // this will trigger when a user submits a search in the search bar
  handleSubmit = async (searchTerm) => {
    console.log(searchTerm);
    debugger;
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
      <div className=""> 
          <Search handleSearch={this.handleSubmit}/>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          <h1>Welcome to our Youtube Clone!</h1>
          
          <div className="row">
            {/* <VideoPlayer video={this.state.selectedVideoId} /> */}
            <Comments />
          </div>
        <div className="row">
          <p>Related videos in this row</p>
        </div>
      </div>
    );
  }
}

export default App;