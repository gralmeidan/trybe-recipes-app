import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import profileIcon from '../../images/profileIcon.svg';

const ProfileIcon = () => (
  <Link to="/profile">
    <Image
      src={ profileIcon }
      alt="Profile"
      data-testid="profile-top-btn"
    />
  </Link>
);

export default ProfileIcon;
