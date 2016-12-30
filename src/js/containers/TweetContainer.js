import connectToStores from 'alt-utils/lib/connectToStores';
import React, { Component, PropTypes } from 'react';

import DateStore from '../stores/DateStore';
import TweetForm from '../components/TweetForm';

const propTypes = {
  date: PropTypes.string.isRequired,
};

class TweetContainer extends Component {
  static getStores() {
    return [DateStore];
  }

  static getPropsFromStores() {
    return DateStore.getState();
  }

  render() {
    return (
      <TweetForm date={this.props.date} />
    );
  }
}

TweetContainer.propTypes = propTypes;
export default connectToStores(TweetContainer);
