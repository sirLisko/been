import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Login = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #c2c2c2;
  border-radius: 1rem;
  text-align: center;
  padding: 1rem;

  div {
    margin-bottom: 1rem;
  }
`;

const LoginBox = props => (
  <Login>
    <div>Sign in to sync your travel log.</div>
    <button className="github" onClick={() => props.authenticate('Google')}>
      Log In With Google
    </button>
    <button className="twitter" onClick={() => props.authenticate('Twitter')}>
      Log In With Twitter
    </button>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>
      Log In With Facebook
    </button>
  </Login>
);

LoginBox.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default LoginBox;
