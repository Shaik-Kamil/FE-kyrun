import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import PostComment from './PostComment'
import GroupMembers from './GroupMembers';
import Bulletin from "./Bulletin";
import NewBulletin from "./NewBulletin";
const API = process.env.REACT_APP_API_URL


function OneGroup ({ userId }) {
    const [group, setGroup] = useState([])
    const { id } = useParams()
    const [isAuthor, setIsAuthor] = useState(false);
    const [isJoined, setIsJoined] = useState(false);

    useEffect(() => {
        axios
        .get(`${API}/groups/${id}`)
        .then((res) => {
            console.log(res.data)
            setGroup(res.data)
            // if res.data.author ID === userId the state will be true if not then its false
            setIsAuthor(res.data.author_id === userId);
            // if res.data.author ID === userId the state will be true if not then its false
            setIsAuthor(res.data.author_id === userId);
        })
        .catch((c) => {
            console.warn("catch", c)
        })
    }, [id])

    useEffect(() => {
        checkMembershipStatus();
      }, [group.id, userId]);
    
      const checkMembershipStatus = async () => {
        try {
          const response = await axios.get(`${API}/usergroups/${userId}/${id}`);
          setIsJoined(true);
        } catch (error) {
          setIsJoined(false);
        }
      };
    
  const handleJoin = async () => {
    try {
      const response = await axios.post(`${API}/usergroups/${userId}/${id}`);
      setIsJoined(true);
      console.log('Joined the group successfully');
    } catch (error) {
      console.error('Failed to join the group', error);
    }
  };
  const handleLeave = async () => {
    try {
      await axios.delete(`${API}/usergroups/${userId}/${id}`);
      
      setIsJoined(false);
      console.log('Left the group successfully');
    } catch (error) {
      console.error('Failed to leave the group', error);
    }
  };
  return (
            <article>
              <br />
              <br />
              <br />
              <br />
              <br />
            <div>
              <header class="bg-primary bg-gradient text-white">
                <div class="container px-4 text-center" style={{padding: '30px'}}>
                    {/* <img className='group-img' src={group.img} alt='group'></img> */}
                    <h1 class="fw-bolder">Welcome to {group.title}</h1>
                    <p class="lead">{group.about}</p>
                    <div className="join">
                {isJoined ? (
                  <>
                    <h3>You are a member of the {group.title} community. </h3>
                    <button onClick={handleLeave} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Leave Group</button>
                  </>
                ) : (
                  <button onClick={handleJoin} className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Join Group</button>
                  )}
              </div>
                    {/* <a class="btn btn-lg btn-light" href="#about">Start Scrolling</a> */}
                </div>
              </header>
              {isAuthor && (
                <div>
                <NewBulletin group={group} userId={userId} id={id} />
              </div>
            )}
              <section id="about">
                <div class="container px-4">
                    <div class="row gx-4 justify-content-center">
                        <div class="col-lg-8">
                              <p class="lead">
                                <br />
                                <div>
                                  <Bulletin group={group} />
                                </div>
                                <br />
                                <br />
                              </p>    
                            <ul>
                              <div className='comments' style={{position: 'relative', bottom: '100px'}}>
                                <PostComment group={group} userId={userId} />
                              </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
                <div class="col-lg-4" style={{ position: 'relative', left: '50px', bottom: '655px', marginTop: '20px'}}>
                  
                  <p class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '20px'}}><img src={group.img} style={{width: '250px', height: '250px', padding: '20px'}}></img>
                  <GroupMembers group={group} id={id} />
                  </p>
                </div>
                    <div className='navi'>
                        <div className='back'>
                            <Link to={`/groups`}>
                                <button className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        );
    };
    
    export default OneGroup;