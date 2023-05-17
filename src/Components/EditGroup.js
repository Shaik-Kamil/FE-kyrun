import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


const EditGroup = () => {

    let { id } = useParams();
    let navigate = useNavigate();

    const [groups, setGroups] = useState({
        title: "",
        about: "",
        img: "not null",
      })

    const updateGroup = (updatedGroup) => {
        console.log("IDDDDDD", id);
        axios
          .put(`${API}/groups/${id}`, updatedGroup)
          .then(
            () => {
              console.log("hello", id);
              navigate(`/groups/${id}`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };


      const handleTextChange = (event) => {
        setGroups({ ...groups, [event.target.id]: event.target.value });
      };

      useEffect(() => {
        axios.get(`${API}/groups/${id}`).then(
          (response) => setGroups(response.data),
          (error) => navigate(`/not-found`)
        );
      }, [id, navigate]);

      const handleSubmit = (event) => {
        event.preventDefault();
        updateGroup(groups, id);
      };



    return (
        <div>
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

            <button type="submit">Update Group Info</button>

                <Link to={`/products/${id}`}>
                <button>Nevermind!</button>
                </Link>
            </form>
            
        </div>
    );
};

export default EditGroup;