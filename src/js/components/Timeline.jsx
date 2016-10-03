import React, { PropTypes } from 'react';

import TimelineAction from './TimelineAction.jsx';

const propTypes = {
  timeline: PropTypes.array.isRequired,
};

const Timeline = (props) => {
  const actions = props.timeline.map((action, i) => {
    return <TimelineAction key={i} action={action} />;
  });

  const divStyle = {
    maxHeight: '450px',
    overflowY: 'scroll',
  };

  return (
    <div className="column" style={divStyle}>
      <article className="message">
        <div className="message-header">
          Timeline
        </div>
        <div className="message-body">
          {actions}
        </div>
      </article>
    </div>
  );
};

Timeline.propTypes = propTypes;
export default Timeline;
