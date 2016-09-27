import React, { PropTypes } from 'react';
import request from 'superagent';

import Timeline from '../components/Timeline.jsx';

const propTypes = {
  date: PropTypes.string.isRequired,
};

export default class TimelineContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeline: [],
    };

    this.getTimelineFromServer = this.getTimelineFromServer.bind(this);
  }

  componentDidMount() {
    this.getTimelineFromServer(this.props.date);
    // this.interval = setInterval(() => this.getTimelineFromServer(this.props.date), 2000);
  }

  componentWillReceiveProps(nextProps) {
    this.getTimelineFromServer(nextProps.date);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  getTimelineFromServer(date) {
    request
      .get(`http://localhost:3000/timeline/date/${date}`)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        this.setState({ timeline: res.body });
      });
  }

  render() {
    return (
      <Timeline timeline={this.state.timeline} />
    );
  }
}

TimelineContainer.propTypes = propTypes;
