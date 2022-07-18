import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import Icon from '../images/shareIcon.svg';

function ShareButton({ dataTest, path }) {
  const { pathname } = useLocation();

  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    copy(`http://localhost:3000${path || pathname.replace('/in-progress', '')}`);
    setCopied(true);
  };

  return (
    <div>
      <button
        data-testid={ dataTest }
        type="button"
        onClick={ handleClick }
        src={ Icon }
      >
        <img src={ Icon } alt="Share" />
      </button>
      { copied && <p>Link copied!</p> }
    </div>
  );
}

ShareButton.propTypes = {
  dataTest: PropTypes.string,
  path: PropTypes.string,
};

ShareButton.defaultProps = {
  dataTest: 'share-btn',
  path: undefined,
};

export default ShareButton;
