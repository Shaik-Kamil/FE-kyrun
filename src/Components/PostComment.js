import ReplyPost from './ReplyPost';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


const PostComment = () => {

    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    const { id } = useParams()
  

    // const navigate=useNavigate()

    const [comments, setComments]= useState([])
    useEffect(() => {
        axios
        .get(`${API}/posts/${id}`)
        .then((res) => setComments(res.data))
        .catch((c) => console.warn("catch", c));
    }, [id])

    const [replies, setReplies]= useState([])
    useEffect(() => {
        axios
        .get(`${API}/reply/${id}`)
        .then((res) => setReplies(res.data))
        .catch((c) => console.warn("catch", c));

    },[id])

    const [reply, setReply]= useState({
        reply:"",
        date: `${formattedDate}`,
        posts_id: `${id}`,
        author_id: `${id}`,
        groups_id: `${id}`
    })

    // variables to hold info
  const [post, setPost] = useState({
    post:"",
    date: `${formattedDate}`,
    author_id: `${id}`,
    groups_id: `${id}`
  });

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);


const addPost = (newPost) => {
    axios
      .post(`${API}/posts/`, newPost)
      .then(
        (response) => {
          setComments([response.data, ...comments]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  // const deletePost = (id) => {
  //   axios
  //   .delete(`${API}/posts/${id}`)
  //   .then(
  //     () => {
  //       const copyPostArray = [...comments]
  //       const indexDeletedPost = copyPostArray.findIndex((comment) => {
  //         return comment.id === id
  //       })
  //       copyPostArray.splice(indexDeletedPost, 1)
  //       setComments(copyPostArray)
  //     },
  //     (error) => console.error(error)
  //   )
  //   .catch((c) => console.warn('catch', c))
  // }

  const addReply = (newReply) => {
    const authorId = 1
    const reply1 = {
        ...newReply,
        author_id: authorId,
        post_id: selectedCommentId 
      };

    axios
      .post(`${API}/reply`, reply1)
      .then(
        (response) => {
          setReplies([response.data, ...replies]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(post);
  };

  const handleSubmitReply = (event) => {
    event.preventDefault();
    addReply(reply);
    setShowReplyForm(false)
  };


  const handleTextChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const handleTextChangeReply = (event) => {
    setReply({ ...reply, [event.target.id]: event.target.value });
  };


  const toggleReplyForm = (commentId) => {
    setShowReplyForm(!showReplyForm);
    setSelectedCommentId(commentId);
  };


    
    return (

        <div>
            <ul>
            {comments.map((comment) => (
                <li key={comment.id}> {comment.post} {comment.date}<button onClick={() => toggleReplyForm(comment.id)}>reply</button> {' '} 
                {/* <button onClick={deletePost}>Delete</button> */}
                <ul>
                    {replies
                    .filter((reply) => reply.post_id === comment.id)
                    .map((reply) => (
                      <li key={reply.id}>
                        {reply.reply} {reply.date} 
                      </li> 
                      ))}
                </ul>
                </li>
                ))}
            </ul>

            {showReplyForm && selectedCommentId && (

            <ReplyPost handleTextChangeReply={handleTextChangeReply}
            handleSubmitReply={handleSubmitReply}
            reply={reply}
            />
            )}


            <h1>Comment</h1>
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
            <label>Date:</label>
            <input 
                id='date'
                type="text" 
                value={post.date}
                onChange={handleTextChange}
                required
             />
             <button type="submit">Post Comment</button>
            </form>
        </div>
    );
};

export default PostComment;