import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

//    id SERIAL PRIMARY KEY,
// title TEXT NOT NULL,
// about TEXT,
// img TEXT NOT NULL
const API = process.env.REACT_APP_API_URL;

const NewGroup = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
    const [groups, setGroups] = useState({
        title: "",
        about: "",
        img: "not null",
        location: 'Manhattan',
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
        addGroup(groups);
      };
    
      const handleTextChange = (event) => {
        setGroups({ ...groups, [event.target.id]: event.target.value });
      };

      const handleLocationChange = (event) => {
        setGroups({ ...groups, location: event.target.value });
      };
    

    return (
        <div>
            <h1>CREATE A NEW GROUP</h1>
            <button onClick={() => setIsModalOpen(true)} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>New Group</button>
            <Modal 
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            contentLabel="New Group Modal" >
            <form onSubmit={handleSubmit}>
            <h2>New Group Form</h2>
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
             <br />
          <label>Location:</label>
          <select id="location" value={groups.location} onChange={handleLocationChange}>
              <option value="Manhattan">Manhattan</option>
              <option value="Queens">Queens</option>
              <option value="Bronx">Bronx</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Staten Island">Staten Island</option>
          </select>
          <br />

            <button type="submit" className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Save Group Info</button>
            <button onClick={() => setIsModalOpen(false)} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Cancel</button>
            </form>
            </Modal>

            
        </div>
    );
};

export default NewGroup;