import axios from 'axios';
import { useState, useEffect } from 'react';
import '../CSS/RunningRoutes.css';

const API = process.env.REACT_APP_API_URL;

function RunningRoutes() {
  const [runningRoutes, setRunningRoutes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/runningRoutes`)
      .then((res) => {
        console.log(res.data);
        setRunningRoutes(res.data);
      })
      .catch((error) => {
        console.warn('catch', error);
      });
  }, []);

  return (
    <article>
      <div>
        {/* Render running routes */}
        {runningRoutes.map((route) => (
          <div key={route.id}>
            <h1>{route.title}</h1>
            <p>{route.description}</p>
            {/* Render other running route details */}
          </div>
        ))}
      </div>
    </article>
  );
}

export default RunningRoutes;
