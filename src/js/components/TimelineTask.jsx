import React, { PropTypes } from 'react';

const propTypes = {
  action_name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const TimelineTask = (props) => {
  return (
    <article className="message">
      <div className="message-header">
        {props.action_name}: Task
      </div>
      <div className="message-body">
        {props.text}
      </div>
    </article>
  );
};

TimelineTask.propTypes = propTypes;
export default TimelineTask;
