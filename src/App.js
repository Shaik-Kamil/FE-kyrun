import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReactModal from 'react-modal';
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import LoginPage from './Components/LoginPage';
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";
// import socketIO from 'socket.io-client'
// import ChatHome from './client/src/ChatHome'
// import ChatPage from "./client/src/chatPage";
import './client/src/chat.css'
import "./App.css";
// import logo from '../src/LOGO NO BG.png';
import './CSS/LoginPage.css';
// import RegistrationModal from './Components/RegistrationModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const handleRegister = (event) => {
    event.preventDefault();
    // Show the registration modal
    setRegistrationModalIsOpen(true);
  };

  const handleRegistration = (username, password) => {
    // Make API call to register user
    setIsLoggedIn(true);
    setUsername('');
    setPassword('');
  };

  const [registrationModalIsOpen, setRegistrationModalIsOpen] = useState(false);

  const closeRegistrationModal = () => {
    setRegistrationModalIsOpen(false);
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
            // logo={logo}
          />} />
          {/* <Route path="/register" element={<RegistrationModal
            isOpen={registrationModalIsOpen}
            onClose={closeRegistrationModal}
            handleRegistration={handleRegistration}
          />} /> */}
          <Route path="/users/new" element={<New />} />
          <Route exact path="/users/:id" element={<Show />} />
          <Route path="/users/:id/edit" element={<Edit />} />
          {/* <Route path="/chatHome" element={<ChatHome socket={socket} />} />
          <Route path='/chat' element={<ChatPage socket={socket} />} /> */}
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>

      {/* <img src={logo} alt="Logo" /> */}

      {!isLoggedIn && (
        <button onClick={handleRegister}>Register</button>
      )}
    </div>
  );
}

export default App;
