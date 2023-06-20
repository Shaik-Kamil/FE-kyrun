import React from 'react';
// import { useState } from "react";
import { Link } from "react-router-dom"
import '../CSS/Groups.css'
// const API = process.env.REACT_APP_API_URL

const GroupDetails = ({group}) => {
    // const [showDetails, setShowDetails] = useState(false)
    // const navigate = useNavigate()
    // const { id } = useParams()
      
    // // function ToggleGroupDetails() {
    // //     setShowDetails(!showDetails)
    // // }

    // // function NavigateToGroup() {
    // //     navigate(`/groups/${id}`)
    // // }

    return (
        // <div className='group-list' style={{paddingLeft: '50px'}}>
        //     <Link to={`/groups/${group.id}`}>
        //     <img src={group.img} className='group-images' alt='group portrait' ></img>
            
        //     <h2 className='group-name'>{group.title}</h2>
        //     </Link>
            
    <Link to={`/groups/${group.id}`}>
        <div class=" card border-left-primary shadow h-100 py-2" style={{ width: "20%", display: 'inline-block', padding: '25px', margin: '20px'}}>
            <div class="card-body" style={{textAlign: 'center'}}>
                    <img src={group.img} className='group-images' alt='group portrait'></img>
                    
                    <p class="card-title" style={{ marginTop: '20px', color: '#F18701'}}>{group.title}</p>
            </div>
        </div>
    </Link>
        // </div>
    );
};

export default GroupDetails;