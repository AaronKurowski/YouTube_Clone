import './App.css';
import axios from 'axios';
import youtubeAPIKey from './APIKEY';
import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/videoPlayer';
import Search from './components/SearchBar/searchBar.jsx';
import Comments from './components/Comments/comments.jsx';
import VideoList from './components/VideoList/videoList';

class App extends Component {
  state = {
    selectedVideo: {},
    videoList: []
  }
  
  // this will trigger when a user submits a search in the search bar
  handleSubmit = async (searchTerm) => {
    console.log(searchTerm)
    try{
      let query = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm +"&key=" + youtubeAPIKey + "&part=snippet";
      const result = await axios.get(query)
      this.setState({videoList: result.data.items})
      console.log(this)
    }
    catch (ex){
      console.log("error getting video: " + ex)
    }
  }

  // this will trigger when a user clicks one of the related videos
  handleSelect = (video) => {
    this.setState({selectedVideo: video})
    console.log(this)
  }

  render(){
    return(
      <div className="container-fluid"> 
          <Search handleSearch={this.handleSubmit}/>
          <h1>Welcome to our Youtube Clone!</h1>
          <div className="row">
            <div className="col-md-10">
              <VideoPlayer video={this.state.selectedVideoId} />
            </div>
            <div className="col-md-2">
              <Comments />
            </div>
          </div>
          <div className="row">
            <p>Related videos in this row</p>
            <VideoList videos={this.state.videoList} selectVideo={this.handleSelect}/>
          </div>
      </div>
    );
  }
}

export default App;