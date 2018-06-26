import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import allCountries from '../utils/countries';

const Message = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  text-align: center;

  em {
    font-family: 'Pacifico', sans-serif;
  }
`;

const Stats = ({ countries }) => {
  const percentage = Math.round((100 / allCountries.length) * countries.length);

  return (
    <Message>
      {countries.length ? (
        <div>
          <p>
            You have been in <em>{countries.length}</em> countries, that‘s like
            the <em>{percentage}%</em> of the World.
          </p>
          <p>Travel more...</p>
        </div>
      ) : (
        <p>
          You didn‘t log any country. It‘s time to start travelling{' '}
          <span role="img" aria-label="pointing down">
            👇
          </span>
        </p>
      )}
    </Message>
  );
};

Stats.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default Stats;
