import React, { Component, PropTypes } from 'react';

import TweetActions from '../actions/TweetActions';
import Utils from '../utils';

const propTypes = {
  date: PropTypes.string.isRequired,
};

class TweetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(e) {
    this.setState({ message: e.target.value });
  }

  _onSubmit(e) {
    e.preventDefault();
    this.setState({ message: '' });
    TweetActions.postTweet(this.state.message);
  }

  render() {
    const divStyle = {
      maxWidth: '600px',
    };

    const res = (Utils.isToday(this.props.date)) ?
      <form onSubmit={this._onSubmit}>
        <div className="control is-grouped">
          <p className="control is-expanded">
            <input
              className="input"
              value={this.state.message}
              type="text"
              placeholder="いま何してる？"
              onChange={this._onChange}
            />
          </p>
          <p className="control">
            <input className="button is-info" type="submit" value="Tweet" />
          </p>
        </div>
      </form>
    : '';

    return (
      <div className="section">
        <div className="container" style={divStyle}>
          { res }
        </div>
      </div>
    );
  }
}

TweetForm.propTypes = propTypes;
export default TweetForm;
