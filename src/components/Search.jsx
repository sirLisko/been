import React, { Component } from 'react';
import PropTypes from 'proptypes';

import Autocomplete from 'react-autocomplete';
import FlagIcon from './FlagIcon';

import countries from '../utils/countries';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.menuStyle = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%',
      zIndex: 100,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  renderItem(item, isHighlighted) {
    return (
      <div
        key={item.code}
        style={{ background: isHighlighted ? 'lightgray' : 'white' }}
      >
        <FlagIcon code={item.code.toLowerCase()} /> {item.name}
      </div>
    );
  }

  onSelect(value, country) {
    this.props.addCountry(country.code);
    this.setState({ value: '' });
  }

  render() {
    return (
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
    );
  }
}

Search.propTypes = {
  addCountry: PropTypes.func,
};

export default Search;
