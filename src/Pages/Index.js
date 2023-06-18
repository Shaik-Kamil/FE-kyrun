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
<<<<<<< HEAD
            <EditProfile userId={userId} />
=======
            <DashBulletin userId={userId}/>
            <EditProfile />

>>>>>>> 95f7d1e18ef969e8ddc24310e9f768d8837a3068
            
            <NewGroup userId={userId} />

            <JoinedGroups 
            userId={userId} />
            <br/>
            {/* <Groups /> */}
<<<<<<< HEAD
            <Suggested userId={userId} />
            <DashBulletin userId={userId}/>
=======
            <Suggested />
>>>>>>> 95f7d1e18ef969e8ddc24310e9f768d8837a3068



            
        </div>
    );
};
export default Index;