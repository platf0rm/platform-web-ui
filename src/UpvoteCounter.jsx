import React, { Component } from 'react';
import Counter from './Counter.jsx';

class UpvoteCounter extends Component {
  render() {
    return (
      <span className="upvote counter">
        <Counter count={10} />
      </span>
    );
  }
}

export default UpvoteCounter;
