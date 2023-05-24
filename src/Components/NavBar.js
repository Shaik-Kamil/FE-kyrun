import React from 'react';
import { Link } from "react-router-dom"
// import Login from '../Pages/Login';
// import LoginPage from './LoginPage';


const NavBar = () => {
    return (
        <nav>
            <h2>
                <Link to="/login">Login / Register</Link>
            </h2>
        </nav>
    );
};

export default NavBar;