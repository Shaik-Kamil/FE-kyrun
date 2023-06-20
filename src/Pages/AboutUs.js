import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Melanie.css'

export default function AboutUs() {
  return (
    <div id="aboutSection" class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{ marginTop: '130px', width: '100%', paddingTop: '30px'}}>
      <h1>About Kyrun</h1>
      <p
        style={
          {
            //   color: 'blue',
            //   fontStyle: 'italic',
            //   fontWeight: 'bold',
          }
        }
      >
        Kyrun was developed as a group effort by a team of five members. We hope
        you enjoy what we have made so far.
      </p>
      <br />
      <button style={{margin: '20px'}}>
      <Link to="/Shaik">
            <div class="card border-left-primary shadow h-100 py-2" >
                <div class="card-body" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  <img alt="Shaik Kamil" id="abouts" src="https://avatars.githubusercontent.com/u/107490051?v=4" style={{width: '200px', height: '200px'}}/>
                      <h3>Shaik Kamil</h3>
                </div>
            </div>
        </Link>
      </button>
      <button style={{margin: '20px'}}>
        <Link to="/Richie">
            <div class="card border-left-primary shadow h-100 py-2" >
                <div class="card-body" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  <img alt="Richard Carrasco" id="abouts" src="https://avatars.githubusercontent.com/u/107490202?v=4" style={{width: '200px', height: '200px'}}/>
                      <h3>Richard Carrasco</h3>
                </div>
            </div>
        </Link>
      </button>
      <button style={{margin: '20px'}}>
        <Link to="/Melanie">
          <div class="card border-left-primary shadow h-100 py-2" >
              <div class="card-body" style={{ textAlign: 'center', textDecoration: 'none' }}>
                <img alt="Melanie Gonzalez" id="abouts" src="https://avatars.githubusercontent.com/u/107489396?v=4" style={{width: '200px', height: '200px'}}/>
                      <h3>Melanie Gonzalez</h3>
                      {/* <p class="card-title" style={{ marginTop: '20px', color: '#F18701'}}>{group.title}</p> */}
              </div>
          </div>
        </Link>
      </button>
      <button style={{margin: '20px'}}>
        <Link to="/Yianna">
          <div class="card border-left-primary shadow h-100 py-2" >
              <div class="card-body" style={{ textAlign: 'center', textDecoration: 'none' }}>
                <img alt="Yianna Richey" id="abouts" src="https://avatars.githubusercontent.com/u/107489608?v=4" style={{width: '200px', height: '200px'}}/>
                      <h3>Yianna Richey</h3>
              </div>
          </div>
        </Link>
      </button>
      <button style={{margin: '20px'}}>
        <Link to="/Becky">
            <div class="card border-left-primary shadow h-100 py-2" >
                <div class="card-body" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  <img alt="Rebecca Garcia" id="abouts" src="https://avatars.githubusercontent.com/u/22225723?v=4" style={{width: '200px', height: '200px'}}/>
                      <h3>Rebecca Garcia</h3>
                </div>
            </div>
          </Link>
      </button>
      <div className='back'>
                      <Link to={`/`}>
                        <button className='borderman btn-border' style={{ border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF', margin: '10px' }}>Back</button>
                      </Link>
                    </div>
    </div>
  );
}
