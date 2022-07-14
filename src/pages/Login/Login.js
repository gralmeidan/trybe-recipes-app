import React from 'react';

function Login() {
  return (
    <div>
      <input
        data-testid="email-input"
        type="text"
        placeholder="E-mail"
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="password"
      />
      <button
        data-testid="login-submit-btn"
        type="submit"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
