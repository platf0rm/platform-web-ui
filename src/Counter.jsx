import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    return (
      <span>{this.props.count.toLocaleString()}</span>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
};

Counter.defaultProps = {
  count: 0,
};

export default Counter;
