import React from 'react';
import UserProfile from '../Components/UserProfile'
import EditProfile from '../Components/EditProfile';
import NewGroup from '../Components/NewGroup';
import DashBulletin from '../Components/DashBulletin';
import Suggested from '../Components/Suggested';
import JoinedGroups from '../Components/JoinedGroups';


const Index = ({ isJoined, setIsJoined, userId }) => {
    return (
        <div>
            <UserProfile />
            <EditProfile userId={userId} />
            <DashBulletin userId={userId}/>
            
            <NewGroup userId={userId} />

            <JoinedGroups 
            userId={userId} />
            <br/>
            {/* <Groups /> */}
            <Suggested userId={userId} />
            <DashBulletin userId={userId}/>
            
        </div>
    );
};
export default Index;