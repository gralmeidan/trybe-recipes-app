import React from 'react';
import { Link } from 'react-router-dom';

import useLocalStorage from '../../hooks/useLocalStorage';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Profile() {
  // Título apenas para teste
  const headerTitle = 'Profile';
  const [user] = useLocalStorage('user', {});

  return (
    <>
      <Header title={ headerTitle } />
      <main id="profile-page">
        <h2 data-testid="profile-email">
          { user.email }
        </h2>
        <div id="profile-buttons">
          <Link to="/done-recipes">
            <button
              type="button"
              id="profile-done-btn"
              data-testid="profile-done-btn"
            >
              Done Recipes
            </button>
          </Link>
          <Link to="/favorite-recipes">
            <button
              type="button"
              id="profile-favorite-btn"
              data-testid="profile-favorite-btn"
            >
              Favorite Recipes
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              id="profile-logout-btn"
              data-testid="profile-logout-btn"
            >
              Logout
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
