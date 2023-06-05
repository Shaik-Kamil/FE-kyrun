import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import PostComment from './PostComment'
const API = process.env.REACT_APP_API_URL

function OneGroup () {
    const [group, setGroup] = useState({})
    const { id } = useParams()
    const [profileCount, setProfileCount] = useState(0)
    
    useEffect(() => {
        axios
        .get(`${API}/groups/${id}`)
        .then((res) => {
            console.log(res.data)
            setGroup(res.data)
        })
        .catch((c) => {
            console.warn("catch", c)
        })
        axios
      .get(`${API}/usergroups/${id}/profiles/count`)
      .then((res) => {
        console.log(res.data)
        setProfileCount(res.data)
      })
      .catch((c) => {
        console.warn("catch", c)
      })
    }, [id])
    
  const [isJoined, setIsJoined] = useState(false);

  const profileID=3

  const handleJoin = async () => {
    try {
      // Send a request to the server to join the group
      const response = await axios.post(`${API}/usergroups/${profileID}/${group.id}`);

      // Update the UI based on the response
      setIsJoined(true);
      console.log('Joined the group successfully');
    } catch (error) {
      console.error('Failed to join the group', error);
    }
  };

  const handleLeave = async () => {
    try {
      // Send a request to the server to join the group
      const response = await axios.delete(`${API}/usergroups/${profileID}/${group.id}`);

      // Update the UI based on the response
      setIsJoined(false);
        console.log('Left the group successfully');
    } catch (error) {
        console.error('Failed to leave the group', error);
    }  
  };




    return (
        <article>
            <div>
                <h1 className='group-name'>{group.title}</h1>
                <h3 className='group-description'>{group.about}</h3>

                <img className='group-img' src={group.img} alt='group'></img>

                <p>Number of members in this group: {profileCount}</p>

                <div className='comments'>
                    <PostComment />
                </div>

                <div className='navi'>
                    <div className='join'>
                    {isJoined ? (
                        <><p>You have joined this group.</p><button onClick={handleLeave}>Leave Group</button></>
                    ) : (
                        <button onClick={handleJoin}>Join Group</button>
                    )}
                    </div>
                    {/* <div className='leave'>
                    {isJoined ? (
                        <p>You have left this group.</p>
                    ) : (
                        <button onClick={handleLeave}>Leave Group</button>
                    )}
                    </div> */}
                    <div className='back'>
                        <Link to={`/groups`}>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    );
};

export default OneGroup;