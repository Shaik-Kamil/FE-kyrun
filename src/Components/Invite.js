import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  TumblrShareButton,
  FacebookShareButton,
  EmailShareButton,
  TumblrIcon,
  FacebookIcon,
  EmailIcon
} from 'react-share';


function Invite() {
  const { id } = useParams();
  const URL = `https://deploy-preview-55--kyrun.netlify.app/groups/${id}`;
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Invite</button>
      {isOpen && (
        <div className='modalOverlay'>
          <div className='modalInside'>
            <div className='xButton'>
              <button className='x' onClick={closeModal}>
                X
              </button>
            </div>
            <div className='title'>
              <b>Share with friends and family!</b>
            </div>
            <div className='body'>
              <EmailShareButton url={URL}>
                <EmailIcon size={40} round={true} />
              </EmailShareButton>
              <FacebookShareButton url={URL}>
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <TumblrShareButton url={URL}>
                <TumblrIcon size={40} round={true} />
              </TumblrShareButton>
              <br />
              <br />
              <p className='link'>
                <b>Copy Url:</b> <Link to={`/videos/${id}`}>{URL}</Link>
              </p>
            </div>
            <div className='footer'>
              <button onClick={closeModal}>Done</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Invite;
