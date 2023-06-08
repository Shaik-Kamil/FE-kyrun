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
          <p>
            I am a Full Stack Software Engineer Fellow, studying at Pursuit. I
            am currently learning Javascript, CSS, and HTML, React, Node.js, and
            etc. I am pursuing Software Engineering due to it's alignment with
            my dream career to become a Senior Full Stack Developer and Web
            Designer. My passion is for Web Development and Design as I value
            creative expression and user experience. I look forward to building
            connections with anyone in various fields as well as learning more
            programming languages. I am open to new projects and collaborations!
            I am interested in creating and problem solving ! I look forward to
            sharing my upcoming projects and journey!
          </p>
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
