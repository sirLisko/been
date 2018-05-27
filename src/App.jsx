import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 style={{ textAlign: 'center' }}>
            <span role="img" aria-label="take-off">
              🛫
            </span>{' '}
            BEEN{' '}
            <span role="img" aria-label="landing">
              🛬
            </span>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
