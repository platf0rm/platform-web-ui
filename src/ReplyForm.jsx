import React, { Component } from 'react';
import PropTypes from 'prop-types';

var formWidth = {
  width: '500px',
};

class ReplyForm extends Component {
  render() {
    return (
      <div className="column is-narrow" style={formWidth}>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <i className="fa fa-long-arrow-up fa-fw"></i>In Reply To
            </p>
          </header>
          <div className="card-content">
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input className="input" type="text" placeholder="Name" />
              </p>
              <p className="control">
                <a className="button is-primary">Upload</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <textarea className="textarea" placeholder="Message"></textarea>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReplyForm;
