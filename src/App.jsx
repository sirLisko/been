import React, { Component } from 'react';
import styled from 'styled-components';

import Travels from './components/Travels';

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Title>
            <span role="img" aria-label="take-off">
              🛫
            </span>{' '}
            Been{' '}
            <span role="img" aria-label="landing">
              🛬
            </span>
          </Title>
        </header>
        <Travels />
      </div>
    );
  }
}

export default App;
