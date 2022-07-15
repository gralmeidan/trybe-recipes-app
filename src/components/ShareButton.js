import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import Icon from '../images/shareIcon.svg';

function ShareButton() {
  const { pathname } = useLocation();

  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    copy(`http://localhost:3000${pathname.replace('/in-progress', '')}`);
    setCopied(true);
  };

  return (
    <div>
      <button
        data-testid="share-btn"
        type="button"
        onClick={ handleClick }
      >
        <img src={ Icon } alt="Share" />
      </button>
      { copied && <p>Link copied!</p>}
    </div>
  );
}

export default ShareButton;
