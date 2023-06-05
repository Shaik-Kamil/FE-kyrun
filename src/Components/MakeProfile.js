import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const MakeProfile = () => {
    
    const navigate=useNavigate()


    // variables to hold info
  const [profile, setProfile] = useState({
    first_name:"",
    last_name: "",
    email: "",
    password: "",
    age: "",
    zipCode: "",
    pace: "",
    gender: "",
    img: "not null",
  })

//   first_name TEXT,
//   last_name TEXT,
//   email TEXT UNIQUE,
//   password TEXT,
//   age INT,
//   zipcode INT,
//   pace INT,
//   gender TEXT,
//   image TEXT DEFAULT 'no image found'

 
const addProfile = (newProfile) => {
    axios
      .post(`${API}/users`, newProfile)
      .then(
        () => {
          navigate(`/userprofile/1`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    addProfile(profile);
  };

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };
    return (
        <div>
            <h1>CREATE A PROFILE</h1>
            <form onSubmit={handleSubmit}>
            <label>What is your first name?</label>
                <input 
                id='first_name'
                type="text" 
                value={profile.first_name}
                onChange={handleTextChange}
                placeholder="Type your First Name"
                required
             />
            <br />
            <label> What is your last name?</label>
            <input 
            id='last_name'
            type="text" 
            value={profile.last_name}
            onChange={handleTextChange}
            placeholder="Type your Last Name"
            required
             />
            <br />
            <label> What is your email?</label>
            <input 
            id='email'
            type="text" 
            value={profile.email}
            onChange={handleTextChange}
            placeholder="Type your Email"
            required
             />
            <br />
            <label> Create a password?</label>
            <input 
            id='password'
            type="text" 
            value={profile.password}
            onChange={handleTextChange}
            minLength='4'
            
            required
             />
            <br />
            {/* i need to update this */}
            <label> What is your age?</label>
            <input 
            id='age'
            type="number" 
            value={profile.age}
            onChange={handleTextChange}
            placeholder="Type your age"
            required
             />
            <br />
        {/* i need to update this too */}
            <label> What is your zipcode?</label>
            <input 
            id='zipCode'
            type="number" 
            value={profile.zipCode}
            onChange={handleTextChange}
            placeholder="Type your zipcode"
            required
             />
            <br />
            <label> What is your running pace?</label>
            <input 
            id='pace'
            type="number" 
            value={profile.pace}
            onChange={handleTextChange}
            placeholder="Type your running pace"
            required
             />
            <br />
            {/* {i need to update this??} */}
            <label> Select your gender:</label>
            <select id="gender" 
            value={profile.gender} 
            onChange={handleTextChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            </select>
            <br />
            <label> Image URL:</label>
            <input 
            id="img"
            type="text"
            pattern="http[s]*://.+"
            value={profile.img}
            placeholder="http://"
            onChange={handleTextChange}
            required
             />
            <br />
            <button type="submit">Save Profile</button>
            </form>
        </div>
    );

// updategi
};

export default MakeProfile;