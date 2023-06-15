import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs';
import '../CSS/Footer.css'

const Footer = () => {
  return (
    <div>
      {/* <button>
        {' '}
        <Link to="/login">Login or Register</Link>
      </button> */}
      <br />
      <br />
      <br />
      <button className='borderman btn-border' style={{height: '50px', width: '120px', fontSize: '15px', backgroundColor: '#FFFFFF'}}>
        <Link to="/about">About Us</Link>
      </button>
      {/* <button><Link to="/futurefeatures">Future Features</Link></button> */}
    </div>
  );
};

export default Footer;
