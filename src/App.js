import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
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
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Index />} />
            <Route path="/users/new" element={<New />} />
            <Route exact path="/users/:id" element={<Show />} />
            <Route path="/users/:id/edit" element={<Edit />} />
            <Route path= "/chatHome" element={<ChatHome socket={socket}/>}></Route>
            <Route path= '/chat' element={<ChatPage socket={socket}/>}></Route>
            <Route path="*" element={<FourOFour />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
