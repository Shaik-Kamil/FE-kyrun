import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Bulletin from './Bulletin';
const API = process.env.REACT_APP_API_URL;

const NewBulletin = ({ group, userId, id }) => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const getFormattedDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const currentDate = getFormattedDate();
  const [newBulletin, setNewBulletin] = useState({
    title: '',
    message: '',
    author:'',
    date: `${currentDate}`,
    author_id: userId,
    groups: `${group.title}`,
    groups_id: id,
    is_important: false,
  });
  
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
    // calling user profile to get user info
      .get(`${API}/users/${userId}`)
      .then((res) => {
        setProfile(res.data);
        // extracting first and last name from res.data
        const { first_name, last_name } = res.data;
        // converting the info into stringing giving it a variable
        const authorName = `${first_name} ${last_name}`.toString();
        // create a call back function using setNewBulletin to create a shallow copy of the data and updates the state to authorName 
        setNewBulletin((prevBulletin) => ({
          ...prevBulletin,
          author: authorName,
        }));
      })
      .catch((error) => console.warn('Error:', error));
  }, [userId]);
  






  const addBulletin = (newBulletin) => {
    axios
      .post(`${API}/bulletin`, newBulletin)
      .then(() => {
        navigate(`/groups/${id}`);
      })
      .catch((error) => console.warn('Error:', error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBulletin(newBulletin);
  };

  const handleTextChange = (event) => {
    setNewBulletin({ ...newBulletin, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setNewBulletin({
      ...newBulletin,
      [event.target.id]: event.target.checked,
    });
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div>
      <h3>CREATE A NEW BULLETIN FOR YOUR GROUP</h3>
      <button onClick={toggleForm}>{isFormOpen ? 'Close Form' : 'Add Bulletin'}</button>
      {isFormOpen && (
        <form onSubmit={handleSubmit}>
          <h2>New Bulletin Form</h2>
          <label>Write a brief title: </label>
          <input
            id="title"
            type="text"
            value={newBulletin.title}
            onChange={handleTextChange}
            required
          />
          <br />
          <label>Write a bulletin message: </label>
          <input
            id="message"
            type="text"
            value={newBulletin.message}
            onChange={handleTextChange}
            required
          />
          <br />
          <label htmlFor="is_important">URGENT: </label>
          <input
            id="is_important"
            type="checkbox"
            checked={newBulletin.is_important}
            onChange={handleCheckboxChange}
          />
          <br />
          <button type="submit">Save Bulletin Info</button>
        </form>
      )}
    </div>
  );
};

export default NewBulletin;