import React, { PropTypes } from 'react';

import TimelineTask from './TimelineTask.jsx';
import TimelineTweet from './TimelineTweet.jsx';

const propTypes = {
  timeline: PropTypes.array.isRequired,
};

const Timeline = (props) => {
  const actions = props.timeline.map((log, i) => {
    switch (log.type) {
      case 'tweet':
        return <TimelineTweet key={i} message={log.target.message} action_name={log.action_name} />;
      case 'task':
        return <TimelineTask key={i} text={log.target.text} action_name={log.action_name} />;
      default:
        return '';
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
};

Timeline.propTypes = propTypes;
export default Timeline;
