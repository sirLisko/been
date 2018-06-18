import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

const Message = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5rem;

  em {
    font-family: 'Pacifico', sans-serif;
  }
`;

const Stats = ({ allCountries, beenTo }) => {
  const percentage = Math.round(100 / allCountries.length * beenTo.length);

  return (
    <Message>
      You have been in <em>{beenTo.length}</em> countries, that's like the{' '}
      <em>{percentage}%</em> of the World.
    </Message>
  );
};

Stats.propTypes = {
  allCountries: PropTypes.array.isRequired,
  beenTo: PropTypes.array.isRequired,
};

export default Stats;
