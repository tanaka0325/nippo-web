import React, { PropTypes } from 'react';
import request from 'superagent';

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
      .get(`http://localhost:3000/timelines/date/${date}`)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        this.setState({ timelines: res.body });
      });
  }

  render() {
    const actions = this.state.timelines.map((action) => {
      return <div>{action.action_id}</div>;
    });

    return (
      <div className="column">
        {actions}
      </div>
    );
  }
}

TimelineContainer.propTypes = propTypes;
