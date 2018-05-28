import React, { Component } from 'react';
import PropTypes from 'proptypes';

import Autocomplete from 'react-autocomplete';

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
      maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
      zIndex: 100,
    };
  }

  render() {
    return (
      <Autocomplete
        getItemValue={item => item.name}
        items={countries}
        shouldItemRender={(item, value) =>
          item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        renderItem={(item, isHighlighted) => (
          <div
            key={item.code}
            style={{ background: isHighlighted ? 'lightgray' : 'white' }}
          >
            {item.name}
          </div>
        )}
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={(value, country) => {
          this.props.addCountry(country.code);
          this.setState({ value: '' });
        }}
        menuStyle={this.menuStyle}
      />
    );
  }
}

Search.propTypes = {
  addCountry: PropTypes.func,
};

export default Search;
