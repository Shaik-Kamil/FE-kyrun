import React from 'react';
import { useState } from 'react';


const MakeProfile = () => {

    // variables to hold info
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [runningPace, setRunningPace] = useState('');

 
  const handleSubmit = (event) => {
    event.preventDefault();
    // i need to look at backenc to confirm the dataabase
  }
    return (
        <div>
            <h1>My Profile</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <br />
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </label>
            <br />
            <label>
                Running Pace:
                <input type="text" value={runningPace} onChange={(e) => setRunningPace(e.target.value)} />
            </label>
            <br />
            <button type="submit">Save Profile</button>
            </form>
        </div>
    );
};

export default MakeProfile;