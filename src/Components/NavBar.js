import React from 'react';
import { Link, useParams } from "react-router-dom";
import '../CSS/NavBar.css'
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
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <Link to='/' class="navbar-brand">Kyrun</Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Navigation
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto" >
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to='/login'>Lace Up</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to='/groups'>Explore Groups</Link></li>
                        <li class="nav-item" style={{
                        padding: '10px'}}><Link to={`/userprofile/${id}`}>Profile</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        // <nav>
        //     <h2>
        //         <Link to="/login">Login / Register</Link>
        //     </h2>
        //     <h2>
        //         <Link to={`/userprofile/3`}> Profile </Link>
        //     </h2>
        //     <h2>
        //         <Link to="/groups"> Groups </Link>
        //     </h2>
        // </nav>
    );
};

export default NavBar;