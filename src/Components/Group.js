
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import PostComment from './PostComment'
import GroupMembers from './GroupMembers';
const API = process.env.REACT_APP_API_URL

function OneGroup () {
    const [group, setGroup] = useState({})
    const { id } = useParams()
    const [isJoined, setIsJoined] = useState(false);
    const profileID=3
    
    


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
    }, [id])

    useEffect(() => {
        checkMembershipStatus();
      }, [group.id, profileID]);
    
      const checkMembershipStatus = async () => {
        try {
          const response = await axios.get(`${API}/usergroups/${profileID}/${id}`);
          setIsJoined(true);
        } catch (error) {
          setIsJoined(false);
        }
      };
    



  const handleJoin = async () => {
    try {
      const response = await axios.post(`${API}/usergroups/${profileID}/${id}`);

      setIsJoined(true);
      console.log('Joined the group successfully');
    } catch (error) {
      console.error('Failed to join the group', error);
    }
  };

  const handleLeave = async () => {
    try {
      await axios.delete(`${API}/usergroups/${profileID}/${id}`);
      
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

                <GroupMembers group={group} id={id} />

                

                <div className='comments'>
                    <PostComment />
                </div>

                <div className='navi'>
                <div className="join">
            {isJoined ? (
              <>
                <h3>Welcome to the {group.title} community. </h3>
                <button onClick={handleLeave}>Leave Group</button>
              </>
            ) : (
              <button onClick={handleJoin}>Join Group</button>
            )}
          </div>
            
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