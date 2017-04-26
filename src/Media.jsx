import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageMedia from './ImageMedia.jsx';

class Media extends Component {
  whatToReturn() {
    switch (this.props.type) {
      case 'image' :
        return <ImageMedia fileName={this.props.file} />;
      case 'video' :
        // return <VideoMedia fileName={this.props.file} />;
        return false;
      default:
        return false;
    }
  }

  render() {
    return (
      <div className="media-left">
        { this.whatToReturn() }
      </div>
    );
  }
}

Media.propTypes = {
  type: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
};

export default Media;
