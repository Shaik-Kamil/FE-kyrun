import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);

      // Redirect to the home page after successful login
      // (Assuming your home page is at /home)
      window.location.href = '/home';
    } catch (err) {
      console.log(err);
    }
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

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Log in</button>
    </form>

  );
}

export default LoginPage;
