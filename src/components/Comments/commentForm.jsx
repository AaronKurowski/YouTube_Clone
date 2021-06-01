import React, {useState}  from 'react';
import axios from 'axios';
import './commentForm.css';

const CommentForm = (props) => {
    const [commentText, setCommentText] = useState("");

    const getTodaysDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }
    const newComment = {
        "date": {getTodaysDate},
        "like_count": 0,
        "content": "",
        "replies": "",
        "video_id": ""
    }

    const handleSubmit = async (event) => {
        console.log(props.video)
        event.preventDefault();
        newComment.content = commentText;
        newComment.date = getTodaysDate();
        newComment.video_id = props.video.id.videoId;
        console.log(newComment)
        try{
            const result = await axios.post('http://127.0.0.1:8000/comments/', newComment)
            props.updateComments(newComment)
            setCommentText("");
        }
        catch (ex) {
            console.log("error adding comment: " + ex);
        }
    }

    const hasReplies = (comment) => {
        if (comment.replies != null && comment.replies != ""){
            return <span className="weak">reply to {comment.replies.slice(0, 25)}...</span>
        }
        else{
            return 
        }
    }

    const addLike = async (event, comment) => {
        try{
            const result = await axios.put('http://127.0.0.1:8000/comments/' + comment.id + '?like=1');
        }
        catch (ex) {
            console.log("error liking comment: " + ex);
        }
    }

    const addDislike = async (event, comment) => {
        try{
            const result = await axios.put('http://127.0.0.1:8000/comments/' + comment.id + '?dislike=1');
        }
        catch (ex) {
            console.log("error disliking comment: " + ex);
        }
    }

    return(
        <div>
            <div className="comment-form">
                <p>Submit your comments here!</p>
                <form onSubmit={event => handleSubmit(event)}>
                    <input onChange={event => setCommentText(event.target.value)} value={commentText} type="text" name="comment" id="comment"></input>
                    <button type="submit">Comment</button>
                </form>
            </div>
            {props.comments.map((comment) => 
                <div className="comments" id={comment.id}>
                    <div className="single-comment" id={comment.id}>
                        {hasReplies(comment)}
                        <br/>
                        <p><strong>{comment.content}</strong></p>
                    </div>
                    <div className="col" id={comment.id}>
                        <p>{comment.like_count}
                        <button onClick={(e) => addLike(e, comment)}>like</button>
                        <button onClick={(e) => addDislike(e, comment)}>dislike</button> </p>
                    </div>
                    
                </div>
                
            )}
            
        </div>
    );
}

export default CommentForm;