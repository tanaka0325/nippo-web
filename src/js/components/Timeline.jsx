import React, { PropTypes } from 'react';

import TimelineTask from './TimelineTask.jsx';
import TimelineTweet from './TimelineTweet.jsx';

const propTypes = {
  timeline: PropTypes.array.isRequired,
};

export default class Timeline extends React.Component {
  render() {
    const actions = this.props.timeline.map((log, i) => {
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

Timeline.propTypes = propTypes;
