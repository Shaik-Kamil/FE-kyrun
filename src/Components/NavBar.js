import React from 'react';
import { Link, useParams } from "react-router-dom";
// import Login from '../Pages/Login';
// import LoginPage from './LoginPage';


const NavBar = () => {
    const { id } = useParams();

    // const addProfile = (id) => {
    //     axios
    //       .post(`${API}/users`, id)
    //       .then(
    //         () => {
    //           navigate(`/userprofile/${id}`);
    //         },
    //         (error) => console.error(error)
    //       )
    //       .catch((c) => console.warn("catch", c));
    //   };

    return (
        <nav>
            <h2>
                <Link to="/login">Login / Register</Link>
            </h2>
            <h2>
                <Link to={`/userprofile/3`}> Profile </Link>
            </h2>
            <h2>
                <Link to="/groups"> Groups </Link>
            </h2>
        </nav>
    );
};

export default NavBar;