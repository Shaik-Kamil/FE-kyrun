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
        <div>
        
            <img src={profile.img} alt="Profile Image" /> 
            <h1> {profile.first_name} {profile.last_name}</h1>   
            <p>Gender: {profile.gender}</p>
            <p>Running Pace: {profile.pace}</p>
            <p>Age: {profile.age}</p>
            <p>Zipcode: {profile.zipcode}</p>

            {/* <button onClick={handleDelete}>Delete account</button> */}
        </div>
    );
};

export default UserProfile;