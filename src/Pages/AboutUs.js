import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div id="aboutSection">
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
        Kyrun was developed as a group effort by a team of five members.We hope
        you enjoy what we have made so far.
      </p>
      <br />
      <button>
        <Link to="/Shaik">Shaik</Link>
      </button>
      <button>
        <Link to="/Richie">Richie</Link>
      </button>
      <button>
        <Link to="/Melanie">Melanie</Link>
      </button>
      <button>
        <Link to="/Yianna">Yianna</Link>
      </button>
      <button>
        <Link to="/Becky">Becky</Link>
      </button>
    </div>
  );
}
