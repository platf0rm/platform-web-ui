import React, { Component } from 'react';
import Counter from './Counter.jsx';

class CommentCounter extends Component {
  render() {
    return (
      <span className="comment counter">
        <Counter count={30} />
      </span>
    );
  }
}

export default CommentCounter;
