import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//    id SERIAL PRIMARY KEY,
// title TEXT NOT NULL,
// about TEXT,
// img TEXT NOT NULL
const API = process.env.REACT_APP_API_URL;

const NewGroup = () => {
    const [groups, setGroups] = useState({
        title: "",
        about: "",
        img: "not null",
      })

      const navigate=useNavigate()

    //   i need to change the routes
      const addGroup = (newGroup) => {
        axios
          .post(`${API}/groups`, newGroup)
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
        addGroup(group);
      };
    
      const handleTextChange = (event) => {
        setGroups({ ...groups, [event.target.id]: event.target.value });
      };

    return (
        <div>
            <h1>CREATE A NEW GROUP</h1>
            <form onSubmit={handleSubmit}>
            <label>Group Title:</label>
                <input 
                id='title'
                type="text" 
                value={groups.title}
                onChange={handleTextChange}
                required
             />
            <br />
            <label> Write a description of what this groups:</label>
                <input 
                id='about'
                type="text" 
                value={groups.about}
                onChange={handleTextChange}
                required
                />
            <br />
            <label> Upload an image</label>
                <input 
                id="img"
                type="text"
                pattern="http[s]*://.+"
                value={groups.img}
                placeholder="http://"
                onChange={handleTextChange}
                required
                />
             <br />

            <button type="submit">Save Group Info</button>
            </form>

            
        </div>
    );
};

export default NewGroup;