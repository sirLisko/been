import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Autocomplete from 'react-autocomplete';
import FlagIcon from './FlagIcon';

import countries from '../utils/countries';

const SearchBox = styled.div`
  input {
    -webkit-appearance: none;
    background-color: none;
    border: 1px solid #ff4a56;
    font-size: 1rem;
    display: block;
    padding: 0.5rem 1rem;
    border-radius: 60px;
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
    outline: 0;
  }
`;

const SearchItem = styled.div`
  background: ${props => props.isHighlighted && 'lightgray'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.menuStyle = {
      borderRadius: '3px',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '25%',
      width: '200px',
      zIndex: 100,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  renderItem(item, isHighlighted) {
    return (
      <SearchItem
        key={item.code}
        title={item.name}
        isHighlighted={isHighlighted}
      >
        <FlagIcon code={item.code.toLowerCase()} /> {item.name}
      </SearchItem>
    );
  }

  onSelect(value, country) {
    this.props.addCountry(country.code);
    this.setState({ value: '' });
  }

  render() {
    return (
      <SearchBox>
        <Autocomplete
          getItemValue={item => item.name}
          items={countries}
          shouldItemRender={(item, value) =>
            item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          renderItem={this.renderItem}
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={this.onSelect}
          menuStyle={this.menuStyle}
        />
      </SearchBox>
    );
  }
}

Search.propTypes = {
  addCountry: PropTypes.func,
};

export default Search;
