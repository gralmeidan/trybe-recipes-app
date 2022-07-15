import React from 'react';
import Header from '../../components';

function Profile() {
  // Título apenas para teste
  const headerTitle = 'Profile';

  return (
    <>
      <Header title={ headerTitle } />
      <main id="profile-page">
        <h2>Profile</h2>
      </main>
    </>
  );
}

export default Profile;
