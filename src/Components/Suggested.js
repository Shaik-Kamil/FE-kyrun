import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupDetails from './GroupDetails';
import '../CSS/Groups.css';
import { Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const Suggested = ({ userId }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getGroup();  
    const int = setInterval(getGroup, 9000); // Refreshes every 9 seconds
    return () => {
      clearInterval(int);
    };
  }, []);

  const getGroup = () => {
    axios
      .get(`${API}/groups`)
      .then((res) => {
        const groupShuffle = shuffleArray(res.data);
        setGroups(groupShuffle.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  };


   // Fisher-Yates algorithm

  const shuffleArray = (array) => {
    const shuffle = [...array];
    for (let i = shuffle.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[x]] = [shuffle[x], shuffle[i]];
    }
    return shuffle;
  };

  return (
    <div>
      <h1>Suggested Groups</h1>

      {groups.map((group) => (
        <GroupDetails key={group.id} group={group} />
      ))}

      <Link to={`/groups`}>
        <button>View More Groups</button>
      </Link>
    </div>
  );
};

export default Suggested;
