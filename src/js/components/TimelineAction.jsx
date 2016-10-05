import React, { PropTypes } from 'react';
import moment from 'moment';

const propTypes = {
  action: PropTypes.object.isRequired,
};

const TimelineAction = (props) => {
  const clx = () => {
    switch (props.action.class_name) {
      case 'tweet':
        return 'message is-info';
      default:
        return 'message';
    }
  };

  const time = moment(props.action.target.created_at).format('HH:mm');

  return (
    <article className={clx()}>
      <div className="message-header">
        {props.action.class_name} : {props.action.type} at {time}
      </div>
      <div className="message-body">
        {props.action.target.text}
      </div>
    </article>
  );
};

TimelineAction.propTypes = propTypes;
export default TimelineAction;
