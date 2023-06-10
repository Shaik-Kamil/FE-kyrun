import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../CSS/LoginPage.css'
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleFormSubmit}>
        <h1 style={{marginBottom: '50px'}}>{isRegistering ? 'Register' : 'Log In'}</h1>
        <div className="input" style={{width: '350px', justifyContent: 'center', fontSize: '15px', left: '550px', marginBottom: '30px'}}>
          <label htmlFor="email" className="input__label">Email:</label>
          <input
            class='input__input'
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            style={{border: 'none', outline: 'none', bottom: '5px', backgroundColor: '#73859D'}}
          />
          <small></small>
        </div>
        <div className="input" style={{width: '350px', justifyContent: 'center', fontSize: '15px', left: '550px', marginBottom: '30px'}}>
          <label htmlFor="password" className="input__label">Password:</label>
          <input
            class='input__input'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            style={{border: 'none', outline: 'none', left: '40px', bottom: '5px', backgroundColor: '#73859D'}}
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
        <button type="submit" style={{border: 'none', outline: 'none', padding:'10px'}}>{isRegistering ? 'Register' : 'Log In'}</button>
      </form>
      <p style={{margin: '30px'}}>
        {isRegistering ? (
          <>
            Already have an account?{' '}
            <button onClick={handleFormSubmit} style={{border: 'none', outline: 'none', padding:'10px'}}>Log In</button>
          </>
        ) : (
          <>
            Don't have an account? <button style={{border: 'none', outline: 'none', padding:'10px'}}>Register</button>
          </>
        )}
      </p>
    </div>
  );
}

export default LoginPage;
