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
      timelines: [],
    };

    this.getTimelineFromServer = this.getTimelineFromServer.bind(this);
  }

  componentDidMount() {
    this.getTimelineFromServer(this.props.date);
  }

  componentWillReceiveProps(nextProps) {
    this.getTimelineFromServer(nextProps.date);
  }

  getTimelineFromServer(date) {
    request
      .get(`http://localhost:3000/timeline/date/${date}`)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        this.setState({ timelines: res.body });
      });
  }

  render() {
    const actions = this.state.timelines.map((log, i) => {
      if (log.type === 'tweet') {
        return <TimelineTweet key={i} message={log.target.message} action_name={log.action_name} />;
      } else if (log.type === 'task') {
        return <TimelineTask key={i} text={log.target.text} action_name={log.action_name} />;
      }
    });

    return (
      <div className="column">
        {actions}
      </div>
    );
  }
}

TimelineContainer.propTypes = propTypes;
