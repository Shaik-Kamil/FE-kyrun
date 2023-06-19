import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  const linkStyle = {
    textDecoration: 'none'  // Remove underline
  };

  return (
    <div>
      <button className="btn btn-link">
        <Link to="/login" style={linkStyle}>Login or Register</Link>
      </button>
      <button className="btn btn-link">
        <Link to="/about" style={linkStyle}>About Us</Link>
      </button>
      <button className="btn btn-link">
        {/* <Link to="/futurefeatures" style={linkStyle}>Future Features</Link> */}
      </button>
    </div>
  );
};

export default Footer;
