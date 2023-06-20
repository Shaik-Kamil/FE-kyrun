import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Yianna () {
  return (
    <main style={{marginTop: '100px'}}>
      <section className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-lg-1 my-lg-5">
              <div className="card border-dark shadow">
                <div className="image-container">
                  <img
                    src="https://avatars.githubusercontent.com/u/107489608?v=4"
                    alt="Yianna"
                    className="card-img-top img-fluid shadow-lg animate__animated animate__pulse bw-img"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 order-lg-2">
              <div className="card bg-light border-dark shadow p-4 mt-4">
                <h2 className="mb-4">Yianna Richey</h2>
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
                <div className="mt-4">
                  <Link to="https://github.com/Yiannar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark mr-4"
                    style={{margin: '10px'}}
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                  </Link>
                  <span className="ml-4">
                    <Link to="https://www.linkedin.com/in/yianna-richey-aa00ba15b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                      LinkedIn
                    </Link>
                  </span>
                </div>
              </div>
                  <div className='back'>
                      <Link to={`/about`}>
                        <button className='borderman btn-border' style={{ border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF', margin: '10px' }}>Back</button>
                      </Link>
                    </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Yianna;

