import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Melanie () {
  return (
    <main style={{marginTop: '100px'}}>
      <section className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-lg-1 my-lg-5">
              <div className="card border-dark shadow">
                <div className="image-container">
                  <img
                    src="https://avatars.githubusercontent.com/u/107489396?v=4"
                    alt="Melanie"
                    className="card-img-top img-fluid shadow-lg animate__animated animate__pulse bw-img"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 order-lg-2">
              <div className="card bg-light border-dark shadow p-4 mt-4">
                <h2 className="mb-4">Melanie Gonzalez</h2>
                <p>
                    <p>I am an upcoming Full Stack Web Developer currently training as a Pursuit Fellow. My current goal is to become a developer for a video game company and help create incredible gameplay as well as create new, relatable and diverse stories for those in marginalized communities, such as the LGBTQ+ community, women, women of color, disabled people, and so many others who don't have much representation in the gaming industry. </p>

                    <p>My extensive knowledge and passion regarding video games and my life experience as an Afro-Latina woman who's a part of the LGBTQ+ community in the gaming industry makes it easy for me to see what is lacking in said industry, and that is what I intend to focus on once I have garnered the skills from my training at Pursuit.</p>

                    <p>I plan to use JavaScript as a foundation and continue learning programming languages to aid game developers create inclusive gaming experiences while also not alienating the core gaming community. My main goal is to create games like the Dark Souls series, The Witcher, and other RPGs with more inclusive aspects such as including traditionally black hairstyles in the character creation setting, implementing storylines with LGBTQ+ elements, adding disabled characters without stigmatizing their disabilities, among other things.</p>
                </p>
                <div className="mt-4">
                  <Link to="https://github.com/melanieinpursuit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark mr-4"
                    style={{margin: '10px'}}
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                  </Link>
                  <span className="ml-4">
                    <Link to="https://www.linkedin.com/in/melaniegonzalez7"
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

export default Melanie;
