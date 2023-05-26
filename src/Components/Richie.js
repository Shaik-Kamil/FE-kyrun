import React from 'react';
// import '../components/About.css';
import { Link } from 'react-router-dom';

function Richie() {
  return (
    <main>
      <section className="richie">
        <div id="aboutSection">
          <h2 id="Richie">Richie Carrasco</h2>
          <img
            alt="Richie"
            id="abouts"
            src="https://avatars.githubusercontent.com/u/107490202?v=4"
          />
          <p>bio here</p>
          <p>another paragraph here if necessary</p>
        </div>
      </section>
      <div>
        <li className="return">
          {' '}
          <Link to="/About">Go Back</Link>
        </li>
      </div>
      <footer className="footer">
        Connect with Us!
        <a href="https://github.com/Richie-Pursuit">Richie's GitHub</a>
        <a href="hhttps://www.linkedin.com/in/richie-c-53368316a/">
          Richie's linkedin
        </a>
      </footer>
    </main>
  );
}

export default Richie;
