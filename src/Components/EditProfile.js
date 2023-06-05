import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
const API = process.env.REACT_APP_API_URL;

const EditProfile = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    age: '',
    zipCode: '',
    pace: '',
    gender: '',
    img: 'not null',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateProfile = (updatedProfile) => {
    console.log('IDDDDDD', id);
    axios
      .put(`${API}/users/${id}`, updatedProfile)
      .then(
        () => {
          console.log('hello', id);
          navigate(`/users/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/users/${id}`).then(
      (response) => setProfile(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(profile, id);
  };

  return (
    <div>
      <h1>Edit your Profile</h1>
      <button onClick={() => setIsModalOpen(true)}>Edit Profile</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Edit Profile Modal"
      >
        <form onSubmit={handleSubmit}>
          <h2>Edit Profile Form</h2>
          <label>What is your first name?</label>
          <input
            id="first_name"
            type="text"
            value={profile.first_name}
            onChange={handleTextChange}
            placeholder="Type your First Name"
            required
          />
          <br />
          <label> What is your last name?</label>
          <input
            id="last_name"
            type="text"
            value={profile.last_name}
            onChange={handleTextChange}
            placeholder="Type your Last Name"
            required
          />
          <br />
          <label> What is your email?</label>
          <input
            id="email"
            type="text"
            value={profile.email}
            onChange={handleTextChange}
            placeholder="Type your Email"
            required
          />
          <br />
          <label> Create a password?</label>
          <input
            id="password"
            type="text"
            value={profile.password}
            onChange={handleTextChange}
            minLength="4"
            required
          />
          <br />
          {/* i need to update this */}
          <label> What is your age?</label>
          <input
            id="age"
            type="number"
            value={profile.age}
            onChange={handleTextChange}
            placeholder="Type your age"
            required
          />
          <br />
          {/* i need to update this too */}
          <label> What is your zipcode?</label>
          <input
            id="zipCode"
            type="number"
            value={profile.zipCode}
            onChange={handleTextChange}
            placeholder="Type your zipcode"
            required
          />
          <br />
          <label> What is your running pace?</label>
          <input
            id="pace"
            type="number"
            value={profile.pace}
            onChange={handleTextChange}
            placeholder="Type your running pace"
            required
          />
          <br />
          {/* {i need to update this??} */}
          <label> Select your gender:</label>
          <select
            id="gender"
            value={profile.gender}
            onChange={handleTextChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
          </select>
          <br />
          <label> Image URL:</label>
          <input
            id="img"
            type="text"
            pattern="http[s]*://.+"
            value={profile.img}
            placeholder="http://"
            onChange={handleTextChange}
            required
          />
          <br />
          <button type="submit">Update Info</button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditProfile;
