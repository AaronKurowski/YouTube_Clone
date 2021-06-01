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

  updateComments(comment){
    this.setState({currentVideoComments: [...this.state.currentVideoComments, comment]});
  }

  addLike(comment){
    console.log("Like")
    console.log(comment)
  }

  addDislike(comment){
    console.log("disLike")
    console.log(comment)
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
            <div className="comment-outer-div">
              <CommentForm comments={this.state.currentVideoComments} 
              updateComments={(newComment) => this.updateComments(newComment)}
              addLike={(comment) => this.addLike(comment)}
              addDislike={(comment) => this.addDislike(comment)}/>
            </div>
          </div>
          
          <VideoList videos={this.state.videoList} selectVideo={(video) => this.handleSelect(video)}/>
          
      </div>
    );
  }
}

export default App;