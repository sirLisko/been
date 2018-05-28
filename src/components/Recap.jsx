import React, { Fragment } from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import allCountries from '../utils/countries';

const CountryName = styled.span`
  color: red;
`;

const Recap = props => {
  const beenTo = allCountries.filter(country =>
    props.countries.includes(country.code),
  );

  const Cont = beenTo.map(country => (
    <div key={country.code}>
      {country.code} - <CountryName>{country.name}</CountryName>
    </div>
  ));

  return (
    <Fragment>
      <div>{Cont.length}</div>
      {Cont}
    </Fragment>
  );
};

Recap.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Recap;
