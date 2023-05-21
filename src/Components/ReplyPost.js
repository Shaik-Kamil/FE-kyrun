import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;



const ReplyPost = ({ handleSubmitReply, handleTextChangeReply, reply }) => {

    


    return (
        <div>
            <h1>Reply</h1>
            <form onSubmit={handleSubmitReply}>
            <label>Reply post:</label>
                <input 
                id='reply'
                type="text" 
                value={reply.reply}
                onChange={handleTextChangeReply}
                required
             />
            <br />
            <label>Date:</label>
            <input 
                id='date'
                type="text" 
                value={reply.date}
                onChange={handleTextChangeReply}
                required
             />

             <button type="submit">Post Reply</button>
            </form>
            
        </div>
    );
};

export default ReplyPost;