import React, { PropTypes } from 'react';

const propTypes = {
  action_name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

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

TimelineTweet.propTypes = propTypes;
export default TimelineTweet;
