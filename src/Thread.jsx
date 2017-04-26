import React, { Component } from 'react';
import Post from './Post.jsx';
import Comment from './Comment.jsx';
import ReplyForm from './ReplyForm.jsx';
import testData from './samplePostData.json';

class Thread extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentWillMount() {
    this.setState({
      post: testData.posts.find(post => post.postId === parseInt(this.props.params.id, 10)),
    });
  }

  render() {
    console.log(this.state.post.comments);
    return (
      <div className="column">
        <Post post={this.state.post} />
        <div className="section">
          <ul className="thread-options">
            <li>
              <a href="#!">
                <span>Report</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span>Post A Reply</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="columns">
          <ReplyForm />
        </div>
        <ul className="thread-list">
          {this.state.post.comments.map(comment =>
            <Comment post={comment} />,
          )}
        </ul>
      </div>
    );
  }
}


export default Thread;
