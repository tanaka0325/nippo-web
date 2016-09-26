import React from 'react';

const TimelineTask = (props) => {
  return (
    <article className="message">
      <div className="message-header">
        {props.action_name}: Task
      </div>
      <div className="message-body">
        {props.text}
      </div>
    </article>  );
};

export default TimelineTask;
