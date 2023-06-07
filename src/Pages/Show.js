import React from 'react';
import Bulletin from '../Components/Bulletin';

import Group from '../Components/Group';


const Show = ({ setUserId, userId }) => {
    return (
        <div>
            <Group 
            setUserId={setUserId} 
            userId={userId}/>

        </div>
    );
};

export default Show;