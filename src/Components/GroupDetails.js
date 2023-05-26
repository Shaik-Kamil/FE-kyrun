import React from 'react';
import { useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import '../CSS/Groups.css'
// const API = process.env.REACT_APP_API_URL

const GroupDetails = ({group}) => {
    const [showDetails, setShowDetails] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
      
    function ToggleGroupDetails() {
        setShowDetails(!showDetails)
    }

    function NavigateToGroup() {
        navigate(`/groups/${id}`)
    }

    return (
        <div className='group-list'>
            <img src={group.img} className='group-images' alt='group portrait'></img>
            <h2>{group.title}</h2>
            
            <button className='toggle-button' onClick={() => {ToggleGroupDetails()}}>
                {!showDetails ? "Group Description" : "Close"}
            </button>

            {showDetails && (
                <div className='group-details'>
                    <p>{group.about}</p>

                    <Link to={`/groups/${group.id}`}>

                    <button> View Group </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default GroupDetails;