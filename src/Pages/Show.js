import React from 'react';
import Group from '../Components/Group';


const Show = ({ setUserId, userId, isJoined, setIsJoined }) => {
    return (
        <div>
            <Group 
            setUserId={setUserId} 
            userId={userId}
            setIsJoined={setIsJoined}
            isJoined={isJoined}
            />
            

        </div>
    );
};

export default Show;