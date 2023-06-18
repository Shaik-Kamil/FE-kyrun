import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import '../CSS/Comments.css'
const API = process.env.REACT_APP_API_URL;

const PostComment = ({ userId }) => {


  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const { id } = useParams()


  // const navigate=useNavigate()
  const [profile, setProfile] =useState([])
  const [comments, setComments]= useState([])
  useEffect(() => {
      axios
      .get(`${API}/posts/${id}`)
      .then((res) => setComments(res.data))
      .catch((c) => console.warn("catch", c));
  }, [id])

  useEffect(() => {
    axios
    .get(`${API}/users/`)
    .then((res) => setProfile(res.data))
    .catch((c) => console.warn("catch", c));
}, [id])

  useEffect(() => {
    axios
      .get(`${API}/reply/`)
      .then((res) => setReplies(res.data))
      .catch((c) => console.warn('catch', c));
  }, [id]);

  const addPost = (newPost) => {
    const authorId = userId;
    const postWithAuthorId = { ...newPost, author_id: authorId };
    axios
      .post(`${API}/posts/`, postWithAuthorId)
      .then(
        (response) => {
          setComments([response.data, ...comments]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const deletePost = (id) => {
    axios
      .delete(`${API}/posts/${id}`)
      .then(
        () => {
          const copyPostArray = [...comments];
          const indexDeletedPost = copyPostArray.findIndex((comment) => {
            return comment.id === id;
          });
          copyPostArray.splice(indexDeletedPost, 1);
          setComments(copyPostArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const deleteReply = (id) => {
    axios
      .delete(`${API}/reply/${id}`)
      .then(
        () => {
          const copyRepliesArray = [...replies];
          const indexDeletedReply = copyRepliesArray.findIndex((reply) => {
            return reply.id === id;
          });
          copyRepliesArray.splice(indexDeletedReply, 1);
          setReplies(copyRepliesArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

    const addReply = (newReply) => {
      const reply1 = {
          ...newReply,
          author_id: userId,
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
      .catch((c) => console.warn('catch', c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(post);
  };

  const handleSubmitReply = (event) => {
    event.preventDefault();
    addReply(reply);
    setShowReplyForm(false);
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
      <div class="col-lg-10" style={{position: 'relative', left: '380px', display: 'grid'}}>
      <h1>Posts</h1>
      <ul class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '20px'}}>
        {comments.map((comment) => {
          // to verify that the USERID matched with the author ID
          const commentAuthor = profile.find((user) => user.id === comment.author_id);
          if (commentAuthor) {
            return (
              <li key={comment.id} style={{fontSize: '20px'}}>
      
                <b><img src={commentAuthor.img} alt={commentAuthor.first_name} className="author-image" /> {commentAuthor.first_name}:</b>{' '} {comment.post} {comment.date} {' '}
                <br />
                <button onClick={() => toggleReplyForm(comment.id)}className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '150px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Reply</button>{' '}
      
                {parseInt(userId) === parseInt(comment.author_id) && (
        <button onClick={() => deletePost(comment.id)} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '150px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Delete</button>
      )}
      
      <ul>
        {replies
          .filter((reply) => reply.post_id === comment.id)
          .map((reply) => {
      const replyAuthor = profile.find((user) => user.id === reply.author_id);
      if (replyAuthor) {
        return (
                <li key={reply.id}>
            <b>
              <img src={replyAuthor.img} alt={replyAuthor.first_name} className="author-image" /> {replyAuthor.first_name}:
            </b>{" "}
                  {reply.reply} {reply.date}
            {parseInt(userId) === parseInt(reply.author_id) && (
  <button onClick={() => deleteReply(reply.id)} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '150px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Delete</button>
)}
           </li>
        );
      } else {
              return null;
      }
    })}
      </ul>
          </li>
            );
          } else {
            return null; // Skip rendering if comment author profile not found
          }
        })}
      </ul>
            {showReplyForm && selectedCommentId && (

            <ReplyPost handleTextChangeReply={handleTextChangeReply}
            handleSubmitReply={handleSubmitReply}
            reply={reply}
            
            />
            )}


            <h1>Create a Post</h1>
            <form onSubmit={handleSubmit} class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '20px'}}>
            <label style={{fontSize: '20px'}}> Post: </label>

                <input 
                id='post'
                type="text" 
                value={post.post}
                onChange={handleTextChange}
                required
             />
            <br />
            <br />
            <label style={{fontSize: '20px'}}> Date: </label>
            
            <input 
                id='date'
                type="text" 
                value={post.date}
                onChange={handleTextChange}
                required
             />
             <br />
             <br />
              <button type="submit" className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Post Comment</button>
            </form>
        </div>
    );
};

export default PostComment;
