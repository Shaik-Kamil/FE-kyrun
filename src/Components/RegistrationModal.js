import React, { useState } from 'react';
import Modal from 'react-modal';

function RegistrationModal(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.handleFormSubmit(name, email, password);
    props.onClose();
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={props.onClose}
      contentLabel="Register"
      appElement={document.getElementById('root')}
    >
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={props.onClose}>Cancel</button>
      </form>
    </Modal>
  );
}

export default RegistrationModal;
