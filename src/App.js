import './App.css';
import axios from 'axios';
import youtubeAPIKey from './APIKEY';
import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer/videoPlayer';
import Search from './components/SearchBar/searchBar.jsx';
import Comments from './components/Comments/comments.jsx';
import VideoList from './components/VideoList/videoList';
import CommentForm from './components/Comments/commentForm.jsx';
import './components/Comments/commentForm.css';

class App extends Component {
  constructor(props){
    super(props);
    this.getComments();
    console.log(this);
  }

  state = {
    selectedVideo: {},
    videoList: [],
    comments: [],
    currentVideoComments: []
  }

  getComments = async () => {
    let query = "http://127.0.0.1:8000/comments/"
    let comments = await axios.get(query)
    this.setState({comments: comments.data})
  }
  
  // this will trigger when a user submits a search in the search bar
  handleSubmit = async (searchTerm) => {
    console.log(this)
    try{
      let query = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm +"&key=" + youtubeAPIKey + "&part=snippet&type=video";
      const result = await axios.get(query)
      this.setState({videoList: result.data.items})
    }
    catch (ex){
      console.log("error getting video: " + ex)
    }
  }

  // this will trigger when a user clicks one of the related videos
  handleSelect = (video) => {
    this.setState({selectedVideo: video}, this.getSpecificComments);
  }

  getSpecificComments(){
    let currentComments = this.state.comments.filter((comment) => {
      return comment.video_id === this.state.selectedVideo.id.videoId;
    })
    this.setState({currentVideoComments: currentComments});
    console.log(this)
    
  }

  render(){
    return(
      <div className="container-fluid"> 
          <Search handleSearch={this.handleSubmit}/>
          <h1>Welcome to our Youtube Clone!</h1>
          <div className="row justify-content-evenly">
            <div className=""></div>
            <div className="col-sm-6">
              <VideoPlayer video={this.state.selectedVideo} />
            </div>
            <div className="col-sm-4 comment-div">
              <CommentForm comments={this.state.comments}/>
            </div>
          </div>
          <div className="row">
            <p>Related videos in this row</p>
            <VideoList videos={this.state.videoList} selectVideo={(video) => this.handleSelect(video)}/>
          </div>
      </div>
    );
  }
}

export default App;