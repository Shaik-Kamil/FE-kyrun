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
    // <div>
      //   <h2 style={{float: 'left', paddingLeft: '50px'}}><u>Important Bulletins From Your Groups:</u></h2>

      //            <br></br>
      //            <br></br>
      //            <br></br>
      // {bulletin.map((group) => (
      //   <Notifications key={group.id} group={group} />
      // ))}
    // </div>

    <div class="col-xl-8 col-lg-5" style={{ padding: '10px', marginTop: '-630px' }}>
        <div class="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h4 class="m-0 font-weight-bold text-primary">Important Bulletins From Your Groups</h4>
                <div class="dropdown no-arrow"> 
                </div>
            </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                      <div class="mt-1 text-center small feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <div style={{paddingTop: '20px'}}>
                            {bulletin.map((group) => (
                              <Notifications key={group.id} group={group} />
                            ))}
                        </div>
                      </div>
                    </div>
        </div>
      </div>
  );
};

export default DashBulletin;
