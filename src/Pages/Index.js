import React from 'react';
import UserProfile from '../Components/UserProfile'
import NewGroup from '../Components/NewGroup';
import DashBulletin from '../Components/DashBulletin';
import Suggested from '../Components/Suggested';
import JoinedGroups from '../Components/JoinedGroups';
import { Link } from 'react-router-dom';


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
            <Suggested />
            <div className='back'>
                      <Link to={`/groups`}>
                        <button className='borderman btn-border' style={{ border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF' }}>Back</button>
                      </Link>
            </div>
        </div>
    );
};
export default Index;