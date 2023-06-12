import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupDetails from './GroupDetails';
import GroupFilter from './GroupFilter';
import '../CSS/Groups.css'
const API = process.env.REACT_APP_API_URL

// THIS IS FOR BROWSE GROUPS, DISPLAYS ALL GROUPS ON APP

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([])

  useEffect(() => {
    axios.get(`${API}/groups`)
      .then(res => {
        setGroups(res.data);
        setFilteredGroups(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Filter Groups by Title</h1>
      <GroupFilter groups={groups} setFilteredGroups={setFilteredGroups} />
      
      {filteredGroups.map((group) => {
        console.log(group)
              return <GroupDetails key={group.id} group={group} />;
            })}
      
    </div>
  );
};
export default Groups;
