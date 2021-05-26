import './App.css';
import axios from 'axios';
import youtubeAPIKey from './APIKEY';
import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/videoPlayer';
import Search from './components/SearchBar/searchBar.jsx';
<<<<<<< HEAD
import Comments from './components/Comments/comments.jsx';
=======
import VideoList from './components/VideoList/videoList';
>>>>>>> d33181b0e967f2aadd50ad7dafd47c21449f81b5

class App extends Component {
  state = {
    selectedVideo: {},
    videoList: []
  }
  
  // this will trigger when a user submits a search in the search bar
  handleSubmit = async (searchTerm) => {
<<<<<<< HEAD
    console.log(searchTerm);
    debugger;
    let query = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm + "&key=" + youtubeAPIKey;
    const result = await axios.get(query)
    this.setState({videoList: result.data.items})
    console.log(this)
=======
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
>>>>>>> d33181b0e967f2aadd50ad7dafd47c21449f81b5
  }

  // this will trigger when a user clicks one of the related videos
  handleSelect = (video) => {
    this.setState({selectedVideo: video})
    console.log(this)
  }

  render(){
    return(
<<<<<<< HEAD
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
=======
      <div className="App"> 
        <Search handleSubmit={this.handleSubmit}/>
        <h1>Welcome to our Youtube Clone!</h1>
        <VideoPlayer video={this.state.selectedVideo} />
        <VideoList videos={this.state.videoList} selectVideo={this.handleSelect}/>
      </div> 
    )
>>>>>>> d33181b0e967f2aadd50ad7dafd47c21449f81b5
  }
}

export default App;