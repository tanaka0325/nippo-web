import React, { PropTypes } from 'react';

import TimelineAction from './TimelineAction';
import TimelineActions from '../actions/TimelineActions';


const propTypes = {
  timeline: PropTypes.array.isRequired,
};

const Timeline = (props) => {
  const actions = props.timeline.map((action, i) => {
    return <TimelineAction key={i} action={action} />;
  });

  return (
    <div className="column">
      <article className="message">
        <div className="message-header">
          Timeline
          <span className="icon" onClick={() => TimelineActions.reverseTimeline()}>
            <i className="fa fa-sort"></i>
          </span>
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
