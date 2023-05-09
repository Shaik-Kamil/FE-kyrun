import React from 'react';
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav>
            <h2>
                <Link to="/users">Find users</Link>
            </h2>
            

        </nav>
    );
};

export default NavBar;