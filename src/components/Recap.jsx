import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import FlagIcon from './FlagIcon';
import Stats from './Stats';

import allCountries from '../utils/countries';

const ListOfCountries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60rem;
  margin-bottom: 3rem;
`;

const CountryBox = styled.div`
  border: 1px solid #efefef;
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 15rem;
`;

const CountryFlag = styled.div`
  border: 1px solid #efefef;
  width: 4rem;
  height: 4rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;
  span {
    position: absolute;
    width: 100px;
    top: 0;
    transform: translateX(-20%);
    z-index: -1;
    margin-top: -0.5rem;
  }
`;

const CountryName = styled.div`
  padding: 1rem;
  font-weight: 600;
  flex-grow: 1;
`;

const Recap = props => {
  const beenTo = allCountries.filter(country =>
    props.countries.includes(country.code),
  );

  const Cont = beenTo.map(country => (
    <CountryBox
      key={country.code}
      onClick={() => props.removeCountry(country.code)}
    >
      <CountryFlag>
        <FlagIcon code={country.code.toLowerCase()} size="5x" />
      </CountryFlag>
      <CountryName>{country.name}</CountryName>
    </CountryBox>
  ));

  return (
    <div>
      <Stats allCountries={allCountries} beenTo={beenTo} />
      <ListOfCountries>{Cont}</ListOfCountries>
    </div>
  );
};

Recap.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Recap;
