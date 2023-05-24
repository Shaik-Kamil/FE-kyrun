import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupDetails from './GroupDetails';
import '../CSS/Groups.css'
const API = process.env.REACT_APP_API_URL

// THIS IS FOR BROWSE GROUPS, DISPLAYS ALL GROUPS ON APP

const Group = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get(`${API}/groups`)
      .then(res => {
        setGroups(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Groups</h2>
      
      {groups.map((group) => {
        console.log(group)
              return <GroupDetails key={group.id} group={group} />;
            })}
      
    </div>
  );
};

export default Group;
