import React from 'react';

const Members = ({member}) => {
    return (
        <div>
           <p>Name: {member.first_name} {member.last_name.charAt(0)}</p> 
           <p>Gender: {member.gender}</p>
           <p>Running Pace: {member.pace}</p>
           <br></br>


            
        </div>
    );
};

export default Members;