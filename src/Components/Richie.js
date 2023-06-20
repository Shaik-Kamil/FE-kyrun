// import React from 'react';
// // import '../components/About.css';
// import { Link } from 'react-router-dom';

// function Richie() {
//   return (
//     <main>
//       <section className="richie">
//         <div id="aboutSection">
//           <h2 id="Richie">Richie Carrasco</h2>
//           <img
//             alt="Richie"
//             id="abouts"
//             src="https://avatars.githubusercontent.com/u/107490202?v=4"
//           />
//           <p>bio here</p>
//           <p>another paragraph here if necessary</p>
//         </div>
//       </section>
//       <div>
//         <li className="return">
//           {' '}
//           <Link to="/About">Go Back</Link>
//         </li>
//       </div>
//       <footer className="footer">
//         Connect with Us!
//         <a href="https://github.com/Richie-Pursuit">Richie's GitHub</a>
//         <a href="https://www.linkedin.com/in/richie-c-53368316a/">
//           Richie's linkedin
//         </a>
//       </footer>
//     </main>
//   );
// }

// export default Richie;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Richie () {
  return (
    <main style={{marginTop: '100px'}}>
      <section className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 order-lg-1 my-lg-5">
              <div className="card border-dark shadow">
                <div className="image-container">
                  <img
                    src="https://avatars.githubusercontent.com/u/107490202?v=4"
                    alt="Richie"
                    className="card-img-top img-fluid shadow-lg animate__animated animate__pulse bw-img"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 order-lg-2">
              <div className="card bg-light border-dark shadow p-4 mt-4">
                <h2 className="mb-4">Richard Carrasco</h2>
                <p>
                  <p>I am a fellow at Pursuit, an intensive 12 month software engineering fellowship with a 9% acceptance rate. At pursuit I am learning first hand how to become a Full Stack Web Developer. Ever since I took an HTML course at Lehman College, I always had a curiosity for tech and the way things work behind the scenes. That spark of intelectual curiosity fueled my desire to learn more about the various programming languages that are relevant to the way we interact with technology on a daily basis. From what has started out as a simple spark of curiosity has now turned into my passion. I have prior experiences with auditing through a large volume of data, which allowed me to make the best use of my organizational skills. Outside of my profesional interest, I enjoy cycling through the city while taking photographs of all the beautiful scenes that New York has to offer. </p>

                  <p>My career goal started out as an audit specialist but has shifted into a future career in tech. For my career, I am looking for an organization where I can make the best use of my creativity while growing along with the company. I am someone who likes to solve problems, build solutions and would love to contribute content that will help make a users experience just a little easier.</p>
                </p>
                <div className="mt-4">
                  <Link to="https://github.com/Richie-Pursuit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark mr-4"
                    style={{margin: '10px'}}
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                  </Link>
                  <span className="ml-4">
                    <Link to="https://www.linkedin.com/in/richie-c-53368316a/"
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

export default Richie;
