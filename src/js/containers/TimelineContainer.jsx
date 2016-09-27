import connectToStores from 'alt-utils/lib/connectToStores';
import React, { PropTypes, Component } from 'react';

import TimelineStore from '../stores/TimelineStore';
import TimelineActions from '../actions/TimelineActions';
import Timeline from '../components/Timeline.jsx';

const propTypes = {
  date: PropTypes.string.isRequired,
  timeline: PropTypes.array.isRequired,
};

class TimelineContainer extends Component {
  static getStores() {
    return [TimelineStore];
  }
  static getPropsFromStores() {
    return TimelineStore.getState();
  }
  componentDidMount() {
    TimelineActions.updateTimeline(this.props.date);
  }

  render() {
    return (
      <Timeline timeline={this.props.timeline} />
    );
  }
}

TimelineContainer.propTypes = propTypes;
export default connectToStores(TimelineContainer);
