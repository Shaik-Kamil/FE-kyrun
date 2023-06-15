import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notifications from './Notifications';
import { useParams } from 'react-router-dom';
import '../CSS/Groups.css';

const API = process.env.REACT_APP_API_URL;

const DashBulletin = ({ userId }) => {
  const [joinedGroup, setJoinedGroup] = useState([]);
  const [numJoinedGroups, setNumJoinedGroups] = useState(0);
  const [bulletin, setBulletin] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/usergroups/${userId}`)
      .then((res) => {
        setJoinedGroup(res.data);
        setNumJoinedGroups(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

//   this code was crazy i used help online to come up with it, a learning process
  useEffect(() => {
    axios
      .get(`${API}/bulletin`)
      .then((res) => {
        const filteredBulletins = res.data.filter(
          (bulletin) =>
        //   if is_important is true and if group_id from joinedgroups is equal to the bulliten group id using find
            bulletin.is_important && 
            joinedGroup.find((group) => group.id === bulletin.groups_id) !== undefined
        );
        setBulletin(filteredBulletins);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [joinedGroup]);

  return (
    <div>
        <h2 style={{float: 'left', paddingLeft: '50px'}}><u>Important Bulletins From Your Groups:</u></h2>

                 <br></br>
                 <br></br>
                 <br></br>
      {bulletin.map((group) => (
        <Notifications key={group.id} group={group} />
      ))}
    </div>
  );
};

export default DashBulletin;
