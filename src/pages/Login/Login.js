import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login() {
  const [email, setEmail] = useLocalStorage('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  formValidation = () => {
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
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleClick = (props) => {
    const { history } = props;
    setEmail(email);
    history.push('/foods');
  };

  return (
    <div>
      <input
        data-testid="email-input"
        type="text"
        placeholder="E-mail"
        onChange={ handleEmail }
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="password"
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
