import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useLocalStorage from '../../hooks/useLocalStorage';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Profile({ history }) {
  // Título apenas para teste
  const headerTitle = 'Profile';
  const [user] = useLocalStorage('user', {});

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

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
              onClick={ logout }
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

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
