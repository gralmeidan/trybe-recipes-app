import React from 'react';

import profileIcon from '../../images/profileIcon.svg';

const ProfileIcon = () => (
  <img
    src={ profileIcon }
    alt="Profile"
    data-testid="profile-top-btn"
  />
);

export default ProfileIcon;
