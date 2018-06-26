import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FacebookIcon from './icons/facebook.jsx';
import GoogleIcon from './icons/google.jsx';
import TwitterIcon from './icons/twitter.jsx';

const Login = styled.div`
  border: 1px solid #c2c2c2;
  border-radius: 1rem;
  text-align: center;
  padding: 1rem 2rem;
  position: relative;

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

const Collapse = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  color: #c2c2c2;
  cursor: pointer;
`;

const SignIn = styled.a`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.collapse = this.collapse.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    const status = localStorage.getItem('login-collapsed');
    status && this.setState({ collapsed: true });
  }

  collapse() {
    this.setState({ collapsed: true });
    localStorage.setItem('login-collapsed', 'true');
  }
  show() {
    this.setState({ collapsed: false });
    localStorage.removeItem('login-collapsed');
  }

  render() {
    if (this.state.collapsed) {
      return <SignIn onClick={this.show}>Sign in</SignIn>;
    }

    return (
      <Login>
        <Collapse onClick={this.collapse}>×</Collapse>
        <div>Sign in to sync your travel log. </div>
        <button
          className="google"
          onClick={() => this.props.authenticate('Google')}
        >
          <GoogleIcon />
        </button>
        <button
          className="twitter"
          onClick={() => this.props.authenticate('Twitter')}
        >
          <TwitterIcon />
        </button>
        <button
          className="facebook"
          onClick={() => this.props.authenticate('Facebook')}
        >
          <FacebookIcon />
        </button>
      </Login>
    );
  }
}

LoginBox.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default LoginBox;
