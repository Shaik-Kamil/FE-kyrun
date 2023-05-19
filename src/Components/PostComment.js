import React, { useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const PostComment = () => {

    const today = new Date();
    const formattedDate = today.toLocaleDateString();
  

    const navigate=useNavigate()

    const [comments, setComments]=useState([])
    useEffect(() => {
        axios
        .get(`${API}/posts`)
        .then((res) => setComments(res.data))
        .catch((c) => console.warn("catch", c));

    },[])



    // variables to hold info
  const [post, setPost] = useState({
    post:"",
    date: `${formattedDate}`
  });



//     id SERIAL PRIMARY KEY,
//     post TEXT,
//     date TEXT NOT NULL,
//     author_id INTEGER REFERENCES profile(id),
//    groups_id INTEGER REFERENCES groups(id)

const addPost = (newPost) => {
    axios
      .post(`${API}/posts`, newPost)
      .then(
        () => {
          navigate(`/groups`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(post);
  };

  const handleTextChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };


    
    return (

        <div>
            <ul>
            {comments.map((comment) => (
                <li key={comment.id}>{comment.date} {comment.post}</li>
                ))}
            </ul>

            <h1>CREATE A NEW GROUP</h1>
            <form onSubmit={handleSubmit}>
            <label>Create a post:</label>
                <input 
                id='post'
                type="text" 
                value={post.post}
                onChange={handleTextChange}
                required
             />
            <br />
            <input 
                id='date'
                type="text" 
                value={post.date}
                onChange={handleTextChange}
                required
             />
            </form>



             
            
        </div>
    );
};

export default PostComment;