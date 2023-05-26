import React from 'react';
import UserProfile from '../Components/UserProfile'
import EditProfile from '../Components/EditProfile';
import NewGroup from '../Components/NewGroup';
import Groups from '../Components/Groups';
import Suggested from '../Components/Suggested';

const Index = () => {
    return (
        <div>
            <UserProfile />
            <EditProfile />
            <NewGroup />
            <br/>
            {/* <Groups /> */}
            <Suggested />


            
            
        </div>
    );
};

export default Index;