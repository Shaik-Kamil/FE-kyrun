import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import PostComment from './PostComment'
import GroupMembers from './GroupMembers';
import Bulletin from "./Bulletin";
// import NewBulletin from "./NewBulletin";
import Invite from "./Invite";
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
    <body id="page-top">
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <!-- Page Wrapper --> */}
        <div id="wrapper" />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">

              {/* <!-- Page Heading --> */}
              <div class="d-sm-flex align-items-center justify-content-center mb-4 feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '10px'}}>
                <h1 class="h3 mb-0 text-gray-800">Welcome to {group.title}</h1>
              </div>

              {/* <!-- Content Row --> */}
              <div class="row">


              </div>

              {/* <!-- Content Row --> */}

              <div class="row">

                {/* <!-- Area Chart --> */}
                <div class="col-xl-8 col-lg-7">
                  <div class="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                      class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h4 class="m-0 font-weight-bold text-primary">Group Details</h4>
                      <div class="dropdown no-arrow">
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                      <div class="chart-area feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '20px'}}>
                        <h3>{group.about}</h3>
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
                      </div>

                    </div>
                  </div>
                </div>

                {/* <!-- Pie Chart --> */}
                <div class="col-xl-4 col-lg-5">
                  <div class="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                      class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h4 class="m-0 font-weight-bold text-primary">Members</h4>
                      <div class="dropdown no-arrow"> 
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                      <div class="mt-1 text-center small feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '20px'}}>
                        <div>
                            <GroupMembers group={group} id={id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Content Row --> */}
              <div class="row">

                {/* <!-- Content Column --> */}
                <div class="col-lg-6 mb-4">

                  {/* <!-- Project Card Example --> */}
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h3 class="m-0 font-weight-bold text-primary">Bulletin</h3>
                    </div>
                    <div class="card-body">
                                     <div>
                <Invite />
                </div>
              <section id="about">
                        <div class="container px-4">
                          <div class="row gx-4 justify-content-center">
                            <div class="col-lg-10">
                              <p class="lead">
                                <div>
                                  <Bulletin group={group} />
                                </div>
                              </p> 
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                            
              </div>

                <div class="col-lg-6 mb-4">

                  {/* <!-- Illustrations --> */}
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h3 class="m-0 font-weight-bold text-primary">Posts</h3>
                    </div>
                    <div class="card-body">
                      <div class="text-center">
                        
                      </div>
                          <ul>
                            <div>
                              <PostComment group={group} userId={userId} />
                            </div>
                          </ul>
                    </div>
                  </div>

                  {/* <!-- Approach --> */}
                  {/* <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                    </div>
                    <div class="card-body">
                      <div className='navi'>
                        
                      </div>
                    </div>
                  </div> */}
                  
                </div>
              </div>
              <div className='back'>
                      <Link to={`/groups`}>
                        <button className='borderman btn-border' style={{ border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF' }}>Back</button>
                      </Link>
                  </div>
            </div>
            {/* <!-- /.container-fluid --> */}

          </div>
          {/* <!-- End of Main Content --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}

      </body>
            
            );
    };
    
    export default OneGroup;