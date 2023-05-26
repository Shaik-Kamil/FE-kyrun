import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs';
const Footer = () => {
  return (
    <div>
      <button>
        {' '}
        <Link to="/login">Login or Register</Link>
      </button>
      <button>
        <Link to="/about">About Us</Link>
      </button>
      <button>{/* <Link to="/futurefeatures">Future Features</Link> */}</button>
    </div>
  );
};

export default Footer;
