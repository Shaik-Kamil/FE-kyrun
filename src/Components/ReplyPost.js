import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;



const ReplyPost = ({ handleSubmitReply, handleTextChangeReply, reply }) => {

    return (
        <div>
            <h1>Reply To A Comment</h1>
            <form onSubmit={handleSubmitReply} class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '20px'}}>
            <label>Reply To Post:</label>
                <input 
                id='reply'
                type="text" 
                value={reply.reply}
                onChange={handleTextChangeReply}
                required
             />
            <br />
            <br />
            <label>Date:</label>
            <input 
                id='date'
                type="text" 
                value={reply.date}
                onChange={handleTextChangeReply}
                required
             />
            <br />
            <br />
             <button type="submit" className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Post Reply</button>
            </form>
            
        </div>
    );
};

export default ReplyPost;