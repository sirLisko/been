import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FacebookIcon from './icons/facebook.jsx';
import GoogleIcon from './icons/google.jsx';
import TwitterIcon from './icons/twitter.jsx';

const Login = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #c2c2c2;
  border-radius: 1rem;
  text-align: center;
  padding: 1rem;

  div {
    margin-bottom: 1rem;
  }

  svg {
    fill: #fff;
    height: 1rem;
    margin-top: 3px;
  }

  button {
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    height: 2rem;
    width: 4rem;
    margin: 0 0.5rem;
  }

  .facebook {
    background-color: #3b5998;
  }
  .google {
    background-color: #dc4e41;
  }
  .twitter {
    background-color: #1da1f2;
  }
`;

const LoginBox = props => (
  <Login>
    <div>Sign in to sync your travel log.</div>
    <button className="google" onClick={() => props.authenticate('Google')}>
      <GoogleIcon />
    </button>
    <button className="twitter" onClick={() => props.authenticate('Twitter')}>
      <TwitterIcon />
    </button>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>
      <FacebookIcon />
    </button>
  </Login>
);

LoginBox.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default LoginBox;
