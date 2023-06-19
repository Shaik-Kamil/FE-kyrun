import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../CSS/Profile.css'

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
        <div class="row">
          <div class="card-body">
            <div class="chart-pie pt-1 pb-2">
              <canvas id="myPieChart"></canvas>
            </div>
            <img src={profile.img} alt="Profile" style={{width: '400px', height: '400px', borderRadius: '20px', marginBottom: '20px'}} />  
        </div>
            <h1 style={{marginBottom: '20px'}}> {profile.first_name} {profile.last_name}</h1> 
            <div class="col-xl-3 col-md-6 mb-4" style={{width: '300px', height: '100px', marginLeft: '150px'}}>
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
              <div class="col-xl-3 col-md-6 mb-4" style={{width: '300px', height: '100px'}}>
                   <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                               <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                  Age:</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{profile.age}</div>
                                    </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>             
                </div>
            <div class="col-xl-3 col-md-6 mb-4" style={{width: '275px', height: '100px'}}>
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
        </div>
    );
};

export default UserProfile;