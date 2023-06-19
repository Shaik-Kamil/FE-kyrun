import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../Components/EditProfile'
import EditProfile from "../Components/EditProfile";
import NewGroup from "../Components/NewGroup";

const API = process.env.REACT_APP_API_URL;


const UserProfile = () => {

    const { id } = useParams();
    const [profile, setProfile] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`${API}/users/${id}`)
          .then((response) => {
            setProfile(response.data);
          })
          .catch((c) => {
            console.warn("catch", c);
          });
      }, [id]);



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
                <h1 class="h3 mb-0 text-gray-800">Welcome, {profile.first_name} {profile.last_name}! </h1>
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
                      <h4 class="m-0 font-weight-bold text-primary">{profile.first_name} {profile.last_name}'s Details</h4>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="row">
                        <div class="card-body">
                            {/* <div class="chart-pie pt-1 pb-2">
                                
                            </div>            */}
                        </div>
                    
                      <div class="col-xl-3 col-md-6 mb-4 " style={{ width: '300px', height: '100px', marginLeft: '150px'}}>
                          <div class="card border-left-primary shadow h-100 py-2">
                              <div class="card-body">
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                              Gender:</div>
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">{profile.gender}</div>
                                          </div>
                                          <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
            <div class="col-xl-3 col-md-6 mb-4" style={{width: '300px', height: '100px'}}>
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Running Pace:</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{profile.pace}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4" style={{ width: '300px', height: '100px', marginLeft: '150px' }}>
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Gender:</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{profile.age}</div>
                                </div>
                                <div class="col-auto">
                                  <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="col-xl-3 col-md-6 mb-4" style={{width: '300px', height: '100px'}}>
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Zip Code:</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{profile.zipcode}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                          <div style={{padding: '27px'}}>
                            <EditProfile />
                          </div>
                          <div style={{padding: '20px'}}>
                            <NewGroup />
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
                      <h4 class="m-0 font-weight-bold text-primary">{profile.first_name} {profile.last_name}</h4>
                      <div class="dropdown no-arrow"> 
                      </div>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                      <div class="mt-1 text-center small feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{padding: '20px', width:'400px', height: '400px'}}>
                        <div>
                            <img src={profile.img} alt="pfp" style={{width: '350px', height: '350px'}}></img>
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
                  {/* <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h3 class="m-0 font-weight-bold text-primary">Bulletin</h3>
                    </div>
                    <div class="card-body">
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
                  </div> */}

                            
              </div>

                <div class="col-lg-6 mb-4">

                  {/* <!-- Illustrations --> */}
                  {/* <div class="card shadow mb-4">
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
                  </div> */}

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
            </div>
            {/* <!-- /.container-fluid --> */}

          </div>
          {/* <!-- End of Main Content --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}

              
      </body>
    );
};

export default UserProfile;