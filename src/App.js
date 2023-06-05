import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ReactModal from 'react-modal';
import EditUser from './Pages/EditUser';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import Index from './Pages/Index';
import LoginPage from './Components/LoginPage';
import Groups from './Components/Groups';
import Show from './Pages/Show';
import NavBar from './Components/NavBar';
import NewGroup from './Pages/NewGroup';
// import socketIO from 'socket.io-client'
// import ChatHome from './client/src/ChatHome'
// import ChatPage from "./client/src/chatPage";
import './client/src/chat.css';
import './App.css';
// import logo from '../src/LOGO NO BG.png';
import './CSS/LoginPage.css';
import EditGroup from './Components/EditGroup';
import AboutUs from './Pages/AboutUs';
import Shaik from './Components/Shaik';
import Yianna from './Components/Yianna';
import Richie from './Components/Richie';
import Melanie from './Components/Melanie';
import Becky from './Components/Becky';
import Footer from './Components/Footer';
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
          {/* Landing Page  */}
          <Route path="/" element={<Home />} />
          {/* User Dashboard */}
          <Route path="/userprofile/:id" element={<Index />} />
          {/* Edit Your Own Profile  */}
          <Route path="/userprofile/edit" element={<EditUser />} />
          {/* Login / Register Page  */}
          <Route
            path="/login"
            element={
              <LoginPage
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin}
                // logo={logo}
              />
            }
          />
          {/* <Route path="/register" element={<RegistrationModal
            isOpen={registrationModalIsOpen}
            onClose={closeRegistrationModal}
            handleRegistration={handleRegistration}
          />} /> */}
          {/* Create A Group  */}
          <Route path="/groups/new" element={<NewGroup />} />
          {/* Edit Group  */}
          <Route path="/groups/:id/edit" element={<EditGroup />} />
          {/* Individual Group Page  */}
          <Route exact path="/groups/:id" element={<Show />} />
          {/* List of All Groups  */}
          <Route path="/groups" element={<Groups />} />
          {/* <Route path="/chatHome" element={<ChatHome socket={socket} />} />
          <Route path='/chat' element={<ChatPage socket={socket} />} /> */}
          {/* Error Page  */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="shaik" element={<Shaik />} />
          <Route path="yianna" element={<Yianna />} />
          <Route path="richie" element={<Richie />} />
          <Route path="melanie" element={<Melanie />} />
          {/* <Route path="becky" element={<Becky />} /> */}
          <Route path="*" onClick={handleRegister} element={<FourOFour />} />
        </Routes>
        <Footer />
      </Router>

      {/* <img src={logo} alt="Logo" /> */}

      {/* {!isLoggedIn && <button onClick={handleRegister}>Register</button>} */}
    </div>
  );
}

export default App;
