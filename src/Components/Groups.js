import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Group = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('/api/groups')
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
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            <a href={`/groups/${group.id}`}>
              {group.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Group;
