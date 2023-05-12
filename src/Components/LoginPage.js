import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../LOGO NO BG.png';
import '../CSS/LoginPage.css';

const LoginPage = () => {
  return (
    <div>
      <h2>
        <img src={logo} alt='logo'></img>
        <br />
        <Link to='/users'>Login</Link>
      </h2>
      <form action='/signup' method='post' id='signup'>
        <h1>Sign Up</h1>
        <div className='field'>
          <label htmlFor='name'>First Name:</label>
          <input type='text' id='name' name='name' placeholder='Enter your First Name' />
          <small></small>
        </div>
        <div className='field'>
          <label htmlFor='name'>Last Name:</label>
          <input type='text' id='name' name='name' placeholder='Enter your Last Name' />
          <small></small>
        </div>
        <div className='field'>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' name='email' placeholder='Enter your Email Address' />
          <small></small>
        </div>
        <button type='submit'>Subscribe</button>

        {/* Add the following code */}
        <div className='apple-login'>
          <button className='btn btn-primary'>
            <span className='fa fa-apple'></span> Sign in with Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
