import connectToStores from 'alt-utils/lib/connectToStores';
import React, { PropTypes, Component } from 'react';

import DateStore from '../stores/DateStore';
import DateHeader from '../components/DateHeader';

const propTypes = {
  date: PropTypes.string.isRequired,
};

class DateHeaderContainer extends Component {
  static getStores() {
    return [DateStore];
  }
  static getPropsFromStores() {
    return DateStore.getState();
  }
  render() {
    return (
      <DateHeader date={this.props.date} />
    );
  }
}

DateHeaderContainer.propTypes = propTypes;
export default connectToStores(DateHeaderContainer);
