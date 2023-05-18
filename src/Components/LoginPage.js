import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/1.png';
import '../CSS/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Tracks whether the user is registering or logging in
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (isRegistering) {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      <h2>
        <img src={logo} alt="logo"></img>
        <br />
        {/* <Link to="/users">Login</Link> */}
      </h2>
      <form className='login-form' onSubmit={handleFormSubmit}>
        <h1>{isRegistering ? 'Register' : 'Log In'}</h1>
        <div className="field">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
          <small></small>
        </div>
        <div className="field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <small></small>
        </div>
        {isRegistering && (
          <div className="field">
            <label htmlFor="confirm-password">Confirm Password: </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <small></small>
          </div>
        )}
        <button type="submit">{isRegistering ? 'Register' : 'Log In'}</button>
        </form>
      <p>
        {isRegistering ? (
          <>
            Already have an account?{' '}
            <button onClick={toggleRegister}>Log In</button>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <button onClick={toggleRegister}>Register</button>
          </>
        )}
      </p>
    </div>
  );
};

export default LoginPage;