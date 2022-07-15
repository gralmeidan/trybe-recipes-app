import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const formValidation = () => {
    const pwdMin = 6;
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValidation = email.match(emailFormat);
    const pwdValidation = password.length >= pwdMin;
    if (emailValidation && pwdValidation) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
    formValidation();
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
    formValidation();
  };

  const handleClick = () => {
    setEmail(email);
    localStorage.setItem('user', /* JSON.stringify */({ email }));
    localStorage.setItem('mealsToken', 11);
    localStorage.setItem('cocktailsToken', 11);
    history.push('/foods');
  };

  return (
    <div>
      <input
        data-testid="email-input"
        type="text"
        placeholder="E-mail"
        value={ email }
        onChange={ handleEmail }
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="password"
        value={ password }
        onChange={ handlePassword }
      />
      <button
        data-testid="login-submit-btn"
        type="submit"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Login
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
