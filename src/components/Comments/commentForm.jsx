import React from 'react';
import './commentForm.css';

const CommentForm = () => {

    const handleSubmit = (event) => {

    }

    return(
        <div className="comment-form">
            <header className="comment-header">Type a comment here!</header>
            <form onSubmit={event => handleSubmit(event)}>
                <input type="text"></input>
                <button type="submit">Comment</button>
            </form>
            <p className="comment">
                Yo this video is the answer to all my life problems. Infinite thumbs 
                up!
                <br /> --Anon
            </p>
            <p className="comment">
                If I had a dollar for all the times I've watched this video, I'd 
                give it all back to the creator to keep making more!
            </p>
            <p className="comment">
                This video is the worst.
            </p>
            <p className="comment">
                Hey just wanted to let you know
                this video is awful. Never make content again, plz.
            </p>
            <p className="comment">
                Do humanity a favor and delete your channel, kthx.
            </p>
            <p className="comment">test text</p>
            <p className="comment">test text</p>
            <p className="comment">test text</p>
            <p className="comment">test text</p>
            <p className="comment">test text</p>
            <p className="comment">test text</p>
            <p className="comment">test text</p>
            <p className="comment">test text</p>
        </div>
    );
}

export default CommentForm;