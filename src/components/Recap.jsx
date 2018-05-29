import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import FlagIcon from './FlagIcon';

import allCountries from '../utils/countries';

const ListOfCountries = styled.div``;

const CountryName = styled.div``;

const Recap = props => {
  const beenTo = allCountries.filter(country =>
    props.countries.includes(country.code),
  );

  const Cont = beenTo.map(country => (
    <CountryName
      key={country.code}
      onClick={() => props.removeCountry(country.code)}
    >
      <FlagIcon code={country.code.toLowerCase()} /> {country.name}
    </CountryName>
  ));

  return (
    <div>
      <div># {Cont.length}</div>
      <ListOfCountries>{Cont}</ListOfCountries>
    </div>
  );
};

Recap.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Recap;
