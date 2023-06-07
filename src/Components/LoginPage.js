import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function LoginPage({ userId, setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Tracks whether the user is registering or logging in
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, [setUserId]);

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

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

    //newUser = email & password

    const addLogin = (loginUser) => {
      axios
        .post(`${API}/users/login`, loginUser)
        .then(
          (res) => {
            console.log(res.data.id);
            setUserId(res.data.id)
            navigate(`/userprofile/${res.data.id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c));
    };

    let loginUser = {
      email,
      password,
    };

    addLogin(loginUser);
  };



  return (
    <div>
      <h2>
        {/* <img src={logo} alt="logo"></img> */}
        <br />
        <Link to="/users">Login</Link>
      </h2>
      <form onSubmit={handleFormSubmit}>
        <h1>{isRegistering ? 'Register' : 'Log In'}</h1>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          <small></small>
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <small></small>
        </div>
        {/* {isRegistering && (
          <div className="field">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <small></small>
          </div>
        )} */}
        <button type="submit">{isRegistering ? 'Register' : 'Log In'}</button>
      </form>
      <p>
        {isRegistering ? (
          <>
            Already have an account?{' '}
            <button onClick={handleFormSubmit}>Log In</button>
          </>
        ) : (
          <>
            Don't have an account? <button>Register</button>
          </>
        )}
      </p>
    </div>
  );
}

export default LoginPage;
