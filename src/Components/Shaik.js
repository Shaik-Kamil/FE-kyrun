import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Shaik() {
  return (
    <main>
      <section className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-lg-1 my-lg-5">
              <div className="card border-dark shadow">
                <div className="image-container">
                  <img
                    src="https://avatars.githubusercontent.com/u/107490051?v=4"
                    alt="Shaik"
                    className="card-img-top img-fluid shadow-lg animate__animated animate__pulse bw-img"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 order-lg-2">
              <div className="card bg-light border-dark shadow p-4 mt-4">
                <h2 className="mb-4">Shaik Kamil</h2>
                <p>
                  I’m currently a FullStack web Development Fellow at Pursuit, an intensive 12-month FullStack web development fellowship where I am upskilling/reskilling to break into tech. I have always been the person who loves solving complex problems and breaking them down. Since I have always been an avid lifelong learner, Software Engineering felt like the next natural and logical step career-wise.
                </p>
                <p>
                  Prior to this, I have experiences in various roles, all in one way or another, that involve Operations Management. Whether it's my recent experience as a warehouse operations lead where I was in charge of both day-to-day operations and personnel management, or wearing many hats such as customer service support, vendor management, delivery partners management, and logistics management among many others. Looking back on my past work experiences, I have demonstrated an agile and quick adaptability to new roles and industries while successfully exceeding expectations.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Shaik-Kamil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark mr-4"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                  </a>
                  <span className="ml-4">
                    <a
                      href="https://www.linkedin.com/in/shaikkamil/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                      LinkedIn
                    </a>
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

export default Shaik;
