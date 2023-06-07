import React from 'react';
import { Link, useParams } from "react-router-dom";
// import Login from '../Pages/Login';
// import LoginPage from './LoginPage';


const NavBar = ({  userId }) => {
    const { id } = useParams();
    return (
        <nav>
            <h2>
                <Link to="/login">Login / Register</Link>
            </h2>
            <h2>
            
                <Link to={`/userprofile/${userId}`}> Profile </Link>
            </h2>
            <h2>
                <Link to="/groups"> Groups </Link>
            </h2>
        </nav>
    );
};

export default NavBar;