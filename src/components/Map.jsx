import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import countriesShapes from 'world-map-country-shapes';

const Chart = styled.div`
  margin: 3rem;
  width: 90%;
  max-width: 900px;
  svg {
    height: 100%;
    width: 100%;
  }
  path {
    cursor: pointer;
    stroke: #ccc;
    :hover {
      opacity: 0.7;
    }
  }
`;

class Map extends PureComponent {
  render() {
    const countries = countriesShapes.map(country => {
      const isSelected = this.props.countries.includes(country.id);
      return (
        <path
          key={country.id}
          d={country.shape}
          style={{
            fill: isSelected ? '#D74076' : '#EEE',
          }}
          onClick={() =>
            isSelected
              ? this.props.removeCountry(country.id)
              : this.props.addCountry(country.id)
          }
        />
      );
    });
    return (
      <Chart>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1025 650">
          {countries}
        </svg>
      </Chart>
    );
  }
}

Map.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCountry: PropTypes.func.isRequired,
  removeCountry: PropTypes.func.isRequired,
};

export default Map;
