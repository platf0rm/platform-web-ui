import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post.jsx';

class Posts extends Component {

  render() {

    return (
      <div className="posts">
        { this.props.postList.map(post => 
          <Post key={'post-' + post.postId} post={post} />
        ) }
      </div>
    );
  }
}

Posts.proptypes = {
  numberOfPosts: PropTypes.number,
  postList: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number,
    dateCreated: PropTypes.number,
  })).isRequired,
};

export default Posts;
