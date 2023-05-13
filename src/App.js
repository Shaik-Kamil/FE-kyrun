import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import LoginPage from './Components/LoginPage';
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";
import socketIO from 'socket.io-client'
import ChatHome from './client/src/ChatHome'
import ChatPage from "./client/src/chatPage";
import './client/src/chat.css'
import "./App.css";

const socket = socketIO.connect('http://localhost:3003')

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Make API call to log in user
    setIsLoggedIn(true);
    setUsername('');
    setPassword('');
  };

  const handleLogout = (event) => {
    event.preventDefault();
    // Make API call to log out user
    setIsLoggedIn(false);
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    // Make API call to register new user
    console.log(usernameReg, passwordReg);
    setUsernameReg('');
    setPasswordReg('');
  };

  return (
    <div className="App">
      <Router>
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Index />} />
          <Route path="/login" element={<LoginPage
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />} />
          <Route path="/register" element={
            <form onSubmit={handleRegistration}>
              <label>
                Username:
                <input type="text" value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)} />
              </label>
              <label>
                Password:
                <input type="password" value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)} />
              </label>
              <button type="submit">Register</button>
            </form>
          } />
          <Route path="/users/new" element={<New />} />
          <Route exact path="/users/:id" element={<Show />} />
          <Route path="/users/:id/edit" element={<Edit />} />
          <Route path="/chatHome" element={<ChatHome socket={socket} />} />
          <Route path='/chat' element={<ChatPage socket={socket} />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
