import React from 'react';

const TimelineTweet = (props) => {
  return (
    <article className="message is-info">
      <div className="message-header">
        {props.action_name}: Tweet
      </div>
      <div className="message-body">
        {props.message}
      </div>
    </article>
  );
};

export default TimelineTweet;
