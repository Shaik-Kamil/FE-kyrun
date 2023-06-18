import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;



const ReplyPost = ({ handleSubmitReply, handleTextChangeReply, reply }) => {

    return (
        <div>
            
            <br></br>
        
            <form onSubmit={handleSubmitReply}>
            <label>Reply:</label>
                <input 
                id='reply'
                type="text" 
                value={reply.reply}
                onChange={handleTextChangeReply}
                required
             />
            <br />
            

             <button type="submit">Post Reply</button>
            </form>
            
        </div>
    );
};

export default ReplyPost;