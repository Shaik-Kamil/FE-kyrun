import React from 'react';
import { Link } from 'react-router-dom';

function Yianna() {
  return (
    <main>
      <section className="yianna">
        <div id="aboutSection">
          <h2 id="Yianna">Yianna Richey</h2>
          <img
            alt="Yianna Richey"
            id="abouts"
            src="https://avatars.githubusercontent.com/u/107489608?v=4"
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
        <a href="https://github.com/Yiannar">Yianna's GitHub</a>
        <a href="https://www.linkedin.com/in/yianna-richey-aa00ba15b/">
          Yianna's linkedin
        </a>
      </footer>
    </main>
  );
}

export default Yianna;
