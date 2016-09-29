import React, { PropTypes } from 'react';

const propTypes = {
  log: PropTypes.object.isRequired,
};

const TimelineLog = (props) => {
  const clx = () => {
    switch (props.log.type) {
      case 'tweet':
        return 'message is-info';
      default:
        return 'message';
    }
  };

  return (
    <article className={clx()}>
      <div className="message-header">
        {props.log.type} : {props.log.action_name}
      </div>
      <div className="message-body">
        {props.log.target.text}
      </div>
    </article>
  );
};

TimelineLog.propTypes = propTypes;
export default TimelineLog;
