import React, { Component } from 'react';
import Counter from './Counter.jsx';

class DownvoteCounter extends Component {
  render() {
    return (
      <span className="downvote counter">
        <Counter count={20} />
      </span>
    );
  }
}

export default DownvoteCounter;
