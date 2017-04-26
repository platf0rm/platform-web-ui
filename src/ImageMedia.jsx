import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageMedia extends Component {
  render() {
    return (
      <figure className="image is-80x80">
        <img src={this.props.fileName} />
      </figure>
    );
  }
}

ImageMedia.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default ImageMedia;
