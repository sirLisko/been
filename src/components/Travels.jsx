import React, { Component } from 'react';
import styled from 'styled-components';

import Map from './Map';
import Search from './Search';
import Recap from './Recap';

const Container = styled.div`
  display: block;
`;

class Travels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      been: [],
    };
    this.addCountry = this.addCountry.bind(this);
  }

  addCountry(country) {
    this.setState({ been: this.state.been.concat(country) });
  }

  render() {
    return (
      <Container>
        <Search addCountry={this.addCountry} />
        <Recap countries={this.state.been} />
        <Map countries={this.state.been} />
      </Container>
    );
  }
}

export default Travels;
