import React, { PropTypes } from 'react';
import request from 'superagent';

import TimelineTask from '../components/TimelineTask.jsx';
import TimelineTweet from '../components/TimelineTweet.jsx';

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
    const actions = this.state.timeline.map((log, i) => {
      if (log.type === 'tweet') {
        return <TimelineTweet key={i} message={log.target.message} action_name={log.action_name} />;
      } else if (log.type === 'task') {
        return <TimelineTask key={i} text={log.target.text} action_name={log.action_name} />;
      }
    });

    const divStyle = {
      maxHeight: '450px',
      overflowY: 'scroll',
    };

    return (
      <div className="column" style={divStyle}>
        {actions}
      </div>
    );
  }
}

TimelineContainer.propTypes = propTypes;
