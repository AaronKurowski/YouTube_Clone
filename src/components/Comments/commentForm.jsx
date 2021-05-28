import React from 'react';
import './commentForm.css';

const CommentForm = () => {

    const handleSubmit = (event) => {

    }

    return(
        <div>
            <div className="comment-form">
                <p>test text</p>
                <form onSubmit>
                    <input type="text" name="comment" id="comment"></input>
                    <button type="submit">Comment</button>
                </form>
            </div>

            <div className="comments">
                <div className="single-comment">
                    <p>test text</p>
                </div>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>
                <p>test text</p>

            </div>
        </div>
    );
}

export default CommentForm;