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
            
        <div class="card text-center mb-3" style={{ width: "20%", display: 'inline-block', padding: '25px', margin: '20px'}}>
            <div class="card-body">
                <Link to={`/groups/${group.id}`}>
                    <img src={group.img} className='group-images' alt='group portrait' ></img>
                    
                    <p class="card-title" style={{ marginTop: '20px'}}>{group.title}</p>
                </Link>
                
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
        // </div>
    );
};

export default GroupDetails;