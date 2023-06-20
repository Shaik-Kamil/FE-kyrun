import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/RunningRoutes.css';

const API = process.env.REACT_APP_API_URL;

const RunningRoutes = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get(`${API}/running-routes`)
      .then(response => {
        setRoutes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const runningRoutesData = [
    {
      id: 1,
      title: 'Prospect Park Loop',
      description: 'Explore the scenic Prospect Park Loop.',
      image: 'https://images.unsplash.com/photo-1671576022707-6a5339bbc4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvc3BlY3QlMjBwYXJrJTIwbG9vcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      title: 'Central Park Loop',
      description: 'Explore the scenic Central Park Loop.',
      image: 'https://images.unsplash.com/photo-1513378628213-b8f36d8c2878?ixlib=rb-4.0.3&ixid=M3wxM[…]dlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 3,
      title: 'Flushing Meadow Park',
      description: 'Explore the scenic Flushing Meadow Park.',
      image: 'https://static01.nyt.com/images/2011/08/26/arts/26JPFLUSHING5/26JPFLUSHING5-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    },
    {
      id: 4,
      title: 'Van Cortlandt Park',
      description: 'Explore the scenic Van Cortlandt Park.',
      image: 'https://blogs.shu.edu/nyc-history/files/2022/04/Van-Cortlandt-park-Opening-pic.png',
    },
    
    {
      id: 5,
      title: 'Pelham Bay Park Trails',
      description: 'Explore the scenic trails in Pelham Bay Park.',
      image: 'https://i.pinimg.com/originals/16/2f/39/162f39d5b49ab8f600e175589e22e5e3.jpg',
    },
    {
      id: 6,
      title: 'Forest Park',
      description: 'Explore the scenic Forest Park.',
      image: 'https://untappedcities.com/wp-content/uploads/2012/08/Woman-and-Dog_New-York_Untapped-Cities_Mindy-Tom1.jpg',
    },
    {
      id: 7,
      title: 'Riverside Park',
      description: 'Explore the scenic Riverside Park.',
      image: 'https://petfriendlytravel.com/wp-content/uploads/2021/04/pet-friendly-travel-Riverside-Park-new-york-ny.jpg',
    },
    {
      id: 8,
      title: 'Cunningham Park',
      description: 'Explore the scenic Cunningham Park.',
      image: 'https://images.squarespace-cdn.com/content/v1/5b9ffe0f1137a680c2c08250/1644276523220-0LKR46ITM9R9HRMELWZ8/QN_FMCP+underpass.jpeg?format=1000wttps://1.bp.blogspot.com/-zL0NwvJfThE/XrDW92f0CaI/AAAAAAAACso/Ibc2Jaq50gYSnGormjetnkV6BHhfcLv2QCLcBGAsYHQ/s1600/20200503.XG5B8802.jpghttps://images.unsplash.com/photo-1671576022707-6a5339bbc4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvc3BlY3QlMjBwYXJrJTIwbG9vcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 9,
      title: 'South Beach Boardwalk Staten Island',
      description: 'Explore the scenic South Beach Boardwalk in Staten Island.',
      image: 'https://i.pinimg.com/originals/2b/c6/cc/2bc6ccc9a6512b6c93991549904b758a.jpg',
    },
  ];

  const handleGoSomewhere = (title) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="running-routes feature bg-primary bg-gradient text-white rounded-3 mb-3" style={{marginTop: '100px', textAlign: 'center', padding: '20px'}}>
      <h2>Running Routes</h2>
      <p>Choose a running route to explore:</p>
      <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', margin: '20px'}}>
        {runningRoutesData.map(route => (
          <div className="card" style={{ width: '18rem', flex: '0 0 33.33%', marginBottom: '30px', padding: '10px'}} key={route.id}>
            <img src={route.image} className="card-img-top" alt={route.title} style={{height: '200px', objectFit: 'cover'}}/>
            <div className="card-body" style={{padding: '20px'}}>
              <h5 className="card-title" style={{fontSize: '20px', marginBottom: '10px'}}>{route.title}</h5>
              <p className="card-text" style={{fontSize: '14px', color: '#666', marginBottom: '20px'}}>{route.description}</p>
              <button
                className="btn btn-primary"
                style={{backgroundColor: '#F18701', border: 'solid 2px #F18701'}}
                onClick={() => handleGoSomewhere(route.title)}
              >
                Directions
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="btn btn-secondary" style={{backgroundColor: '#F18701'}}>
          Back
        </button>
      </Link>
    </div>
  );
}

export default RunningRoutes;