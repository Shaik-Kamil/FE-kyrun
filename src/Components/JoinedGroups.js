import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupDetails from './GroupDetails';
import '../CSS/Groups.css'
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL

const JoinedGroups = ({ userId }) => {

    const [joinedGroup, setJoinedGroup] = useState([]);
    const [numJoinedGroups, setNumJoinedGroups] = useState(0)

    useEffect(() => {
        axios.get(`${API}/usergroups/${userId}`)
          .then(res => {
            setJoinedGroup(res.data);
            setNumJoinedGroups(res.data.length)
          })
          .catch(err => {
            console.log(err);
          });
      }, []);


    return (
      <div style={{display: 'inline-block', textAlign: 'center', position: 'absolute', left: '750px', top: '1150px' }}>
          <h1>Groups Joined: {numJoinedGroups}</h1>
          {/* <h1>Joined Groups</h1> */}
      
      {joinedGroup.map((group) => {
        // console.log(group)
              return <GroupDetails key={group.id} group={group} />;
            })}
            
      </div>
    );
};


export default JoinedGroups;