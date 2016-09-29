import React, { PropTypes } from 'react';

import TimelineLog from './TimelineLog.jsx';

const propTypes = {
  timeline: PropTypes.array.isRequired,
};

const Timeline = (props) => {
  const logs = props.timeline.map((log, i) => {
    return <TimelineLog key={i} log={log} />;
  });

  const divStyle = {
    maxHeight: '450px',
    overflowY: 'scroll',
  };

  return (
    <div className="column" style={divStyle}>
      {logs}
    </div>
  );
};

Timeline.propTypes = propTypes;
export default Timeline;
