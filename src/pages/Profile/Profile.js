import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Profile() {
  // Título apenas para teste
  const headerTitle = 'Profile';

  return (
    <>
      <Header title={ headerTitle } />
      <main id="profile-page">
        <h2>Profile</h2>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
