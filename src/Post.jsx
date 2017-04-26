import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import UpvoteCounter from './UpvoteCounter.jsx';
import DownvoteCounter from './DownvoteCounter.jsx';
import CommentCounter from './CommentCounter.jsx';
import Media from './Media.jsx';

class Post extends Component {
  constructor(props) {
    super(props);
    this.post = this.props.post;
  }

  convertTimestamp(timestamp) {
    // https://gist.github.com/kmaida/6045266

    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
        dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
        ampm = 'AM';
      
    if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
    } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
    } else if (hh === 0) {
      h = 12;
    }

    // ie: 2013-02-18, 8:35 AM
    const time = yyyy + '-' + mm + '-' + dd + ' ' + h + ':' + min + ' ' + ampm;

    return time;
  }

  render() {
    const bFullWidth = 'card ' + (this.props.fullWidth === false ? '' : 'is-narrow');

    return (
      <div className={bFullWidth}>
        <header className="card-headr is-clearfix">
          <span className="card-headr-item is-pulled-left">
            No#{this.post.postId}
          </span>
          <span className="card-headr-item is-pulled-left">
            <small>{this.convertTimestamp(this.post.dateUpdated)}</small>
          </span>
          <span className="card-headr-item is-pulled-left">
            <UpvoteCounter />
            <DownvoteCounter />
            <CommentCounter />
          </span>
          <a className="card-headr-icon is-pulled-right">
            <span className="icon">
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="media">
            {!!this.post.media && <Media type={this.post.media.type} file={this.post.media.url} />}
            <div className="media-content">
              {!!this.post.title && <Link to={`/thread/${this.post.postId}`}><p className="title is-4">{this.post.title}</p></Link>}
              <p>{this.post.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  fullWidth: PropTypes.bool,
  post: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    dateUpdated: PropTypes.number.isRequired,
    dateCreated: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  fullWidth: true,
};



export default Post;
