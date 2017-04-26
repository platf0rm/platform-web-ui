import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post.jsx';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.post = this.props.post;
    this.comments = this.props.comments;
  }

  render() {
    return (
      <li key={this.post.postId}>
        <Post post={this.post} fullWidth={false} />
        <ul className="children">
          {!!this.comments && this.comments.map(comment =>
            <li key={comment.postId} ><Comment post={comment} /></li>,
          )}
        </ul>
      </li>
    );
  }
}

Comment.propType = {
  post: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    dateUpdated: PropTypes.number.isRequired,
    dateCreated: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    dateUpdated: PropTypes.number.isRequired,
    dateCreated: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
  })),
};

export default Comment;
