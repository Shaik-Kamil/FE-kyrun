import React from 'react';
import UserProfile from '../Components/UserProfile'
import EditProfile from '../Components/EditProfile';
import NewGroup from '../Components/NewGroup';
import Groups from '../Components/Groups';
import Suggested from '../Components/Suggested';
import JoinedGroups from '../Components/JoinedGroups';

const Index = () => {
    return (
        <div>
            <UserProfile />
            <EditProfile />
            <NewGroup />
            <JoinedGroups />
            <br/>
            {/* <Groups /> */}
            <Suggested />


            
            
        </div>
    );
};

export default Index;