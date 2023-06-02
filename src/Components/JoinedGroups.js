import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupDetails from './GroupDetails';
import '../CSS/Groups.css'
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL

const JoinedGroups = () => {

    const [joinedGroup, setJoinedGroup] = useState([]);

    useEffect(() => {
        axios.get(`${API}/usergroups/3`)
          .then(res => {
            setJoinedGroup(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }, []);


    return (
        <div>
     <h1>Joined Groups</h1>
      
      
      {joinedGroup.map((group) => {
        console.log(group)
              return <GroupDetails key={group.id} group={group} />;
            })}
            
        </div>
    );
};


export default JoinedGroups;