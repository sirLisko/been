import React, { Component } from 'react';
import styled from 'styled-components';

import Map from './Map';
import Search from './Search';
import Recap from './Recap';

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
      been: [],
    };
    this.addCountry = this.addCountry.bind(this);
    this.removeCountry = this.removeCountry.bind(this);
  }

  componentDidMount() {
    const countries = localStorage.getItem('countries');
    countries && this.setState({ been: JSON.parse(countries) });
  }

  componentDidUpdate() {
    localStorage.setItem('countries', JSON.stringify(this.state.been));
  }

  addCountry(country) {
    this.setState({ been: [...this.state.been, country] });
  }

  removeCountry(country) {
    this.setState({ been: this.state.been.filter(been => been !== country) });
  }

  render() {
    return (
      <Container>
        <Search addCountry={this.addCountry} />
        <Map countries={this.state.been} />
        <Recap countries={this.state.been} removeCountry={this.removeCountry} />
      </Container>
    );
  }
}

export default Travels;
