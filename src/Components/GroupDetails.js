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
            <Link to={`/groups/${group.id}`}>
            <img src={group.img} className='group-images' alt='group portrait'></img>
            
            <h2 className='group-name'>{group.title}</h2>
            </Link>
            
            {/* <button className='toggle-button' onClick={() => {ToggleGroupDetails()}}>
                {!showDetails ? "Group Description" : "Close"}
            </button> */}

            {/* {showDetails && ( */}
                <div className='group-details'>
                    {/* <p>{group.about}</p> */}


                    {/* <button> View Group </button> */}
                </div>
            {/* )} */}
        </div>
    );
};

export default GroupDetails;