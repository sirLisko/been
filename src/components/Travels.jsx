import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';

import base, { firebaseApp } from '../base';
import Login from './auth/Login';

import Map from './Map';
import Search from './Search';
import Recap from './Recap';

const Logout = styled.a`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

class Travels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      uid: '',
      loading: true,
    };
    this.addCountry = this.addCountry.bind(this);
    this.removeCountry = this.removeCountry.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
        localStorage.removeItem('countries');
      } else {
        this.setState({ loading: false });
        const countries = localStorage.getItem('countries');
        countries && this.setState({ countries: JSON.parse(countries) });
      }
    });
  }

  componentDidUpdate() {
    if (!this.state.uid && this.state.countries.length) {
      localStorage.setItem('countries', JSON.stringify(this.state.countries));
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  authHandler = async authData => {
    const uid = authData.user.uid;
    const initialCountries = this.state.countries;
    this.ref = base.syncState(`${uid}/countries`, {
      context: this,
      state: 'countries',
      asArray: true,
      defaultValue: this.state.countries,
      then() {
        initialCountries.length
          ? this.setState({
              loading: false,
              countries: [
                ...new Set([...this.state.countries, ...initialCountries]),
              ],
            })
          : this.setState({ loading: false });
      },
    });

    this.setState({
      uid,
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider);
  };

  logout = async () => {
    await firebase.auth().signOut();
    base.removeBinding(this.ref);
    this.setState({ uid: null, countries: [] });
  };

  addCountry(country) {
    this.setState({ countries: [...this.state.countries, country] });
  }

  removeCountry(country) {
    this.setState({
      countries: this.state.countries.filter(been => been !== country),
    });
  }

  render() {
    return (
      <Container>
        {!this.state.uid &&
          !this.state.loading && <Login authenticate={this.authenticate} />}
        {this.state.uid && <Logout onClick={this.logout}>Logout</Logout>}
        <Search addCountry={this.addCountry} />
        <Map countries={this.state.countries} />
        <Recap
          countries={this.state.countries}
          removeCountry={this.removeCountry}
        />
      </Container>
    );
  }
}

export default Travels;
