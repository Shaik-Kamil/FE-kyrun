import React from 'react';
import { Link } from "react-router-dom"
import logo from '../LOGO NO BG.png'
import '../CSS/LoginPage.css'


const LoginPage = () => {
    return (
        <div>
            <h2>
                <img src={logo} alt='logo'></img>
                <br />
                <Link to="/users">Login</Link>
            </h2>
            <form action="/signup" method="post" id="signup">
                <h1>Sign Up</h1>
                    <div class="field">
                        <label for="name">First Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your First Name" />
                        <small></small>
                    </div>
                    <div class="field">
                        <label for="name">Last Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your Last Name" />
                        <small></small>
                    </div>
                    <div class="field">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" placeholder="Enter your Email Address" />
                        <small></small>
                    </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default LoginPage;