import React from 'react';
// import '../components/About.css';
import { Link } from 'react-router-dom';

function Melanie() {
  return (
    <main>
      <section className="melanie">
        <div id="aboutSection">
          <h2 id="Melanie">Melanie Gonzalez</h2>
          <img
            alt="Melanie Gonzalez"
            id="abouts"
            src="https://avatars.githubusercontent.com/u/107489396?v=4"
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
        <a href="https://github.com/Yihttps://github.com/melanieinpursuitannar">
          Melanie's GitHub
        </a>
        <a href="https://www.linkedin.com/in/melaniegonzalez7/">
          Melanie's linkedin
        </a>
      </footer>
    </main>
  );
}

export default Melanie;
