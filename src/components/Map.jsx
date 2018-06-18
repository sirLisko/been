import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

import WindowSizeListener from 'react-window-size-listener';

import Toast from 'tui-chart';
import 'tui-chart/dist/maps/world';

const Chart = styled.div`
  pointer-events: none;
  padding-left: 5vw;
  div {
    margin: 0 auto;
  }
`;

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.options = {
      chart: {
        width: 900,
        height: 700,
      },
      map: 'world',
      legend: {
        visible: false,
      },
    };
  }

  componentDidUpdate() {
    this.createMap();
  }

  componentDidMount() {
    this.createMap();
  }

  createMap() {
    var container = document.getElementById('chart-area');
    container.innerHTML = '';

    const series = this.props.countries.map(country => ({
      code: country,
      data: 1,
    }));

    this.chart = Toast.mapChart(container, { series }, this.options);
  }

  render() {
    return (
      <Fragment>
        <WindowSizeListener
          onResize={({ windowWidth }) => {
            const width = windowWidth > 900 ? 900 : windowWidth;
            this.chart &&
              this.chart.resize({
                width: width,
                height: width / 1.2,
              });
          }}
        />
        <Chart id="chart-area" />
      </Fragment>
    );
  }
}

Map.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Map;
