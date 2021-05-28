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
    this.handleSubmit(video.snippet.title);
  }

  getSpecificComments(){
    let currentComments = this.state.comments.filter((comment) => {
      return comment.video_id === this.state.selectedVideo.id.videoId;
    })
    this.setState({currentVideoComments: currentComments});
  }

  render(){
    return(
      <div className="container-fluid"> 
          <Search handleSearch={this.handleSubmit}/>
          <h1>Welcome to our Youtube Clone!</h1>
          <div className="content-body">

            <div>
              <VideoPlayer video={this.state.selectedVideo} />
            </div>
<<<<<<< HEAD

            <div className="comment-outer-div">
              <CommentForm />
=======
            <div className="col-sm-4 comment-div">
              <CommentForm comments={this.state.comments}/>
>>>>>>> 0354ee2a0bb6f474e5acb0c56c058e81a3d1ebc0
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