import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Becky () {
  return (
    <main style={{marginTop: '100px'}}>
      <section className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-lg-1 my-lg-5">
              <div className="card border-dark shadow">
                <div className="image-container">
                  <img
                    src="https://avatars.githubusercontent.com/u/22225723?v=4"
                    alt="Becky"
                    className="card-img-top img-fluid shadow-lg animate__animated animate__pulse bw-img"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 order-lg-2">
              <div className="card bg-light border-dark shadow p-4 mt-4">
                <h2 className="mb-4">Rebecca Garcia</h2>
                <p>
                    <p>(Hello World) Nice to meet you! I'm a passionate and driven full-stack web developer with a strong front-end and back-end development foundation. I recently graduated from Pursuit, a rigorous 12-month software engineering boot camp, where I honed my skills and gained hands-on experience building robust web applications.</p>

                    <p>Equipped with a solid understanding of HTML, CSS, JavaScript, and various frameworks such as React.js and Node.js, I thrive on turning creative ideas into functional and visually appealing websites. I excel in a team setting and I consistently strive for excellence in my work.</p>

                    <p>I discovered my passion for coding when I attended a Public Library coding mini Bootcamp . When I enrolled at CUNY BMCC I chose to pursue a Degree in Computer Science, and I hope to one day complete that degree. While I attended BMCC, I found that I have a passion for the tech industry and for computers overall. Coding is not just a career path for me; it is a method of creative expression for me. I find immense joy and fulfillment in bringing ideas to life through the creation of innovative applications.</p>

                    <p>As a junior, I want to engage in new challenges and expand my current skill set. I am looking to grow in this field and learn as much as I can as I progress in my career in Tech.</p>
                </p>
                <div className="mt-4">
                  <Link to="https://github.com/beckyboop21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark mr-4"
                    style={{margin: '10px'}}
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                  </Link>
                  <span className="ml-4">
                    <Link to="https://www.linkedin.com/in/rebeccagarcia21/"
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

export default Becky;