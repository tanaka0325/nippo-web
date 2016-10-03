import React, { PropTypes } from 'react';

import TaskActions from '../actions/TaskActions';

const propTypes = {
  task: PropTypes.object.isRequired,
};

export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.removeTask = this.removeTask.bind(this);
    this.playTask = this.playTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  removeTask() {
    TaskActions.removeTask(this.props.task.id, this.props.date);
  }

  playTask() {
    TaskActions.playTask(this.props.task.id, this.props.date);
  }

  doneTask() {
    TaskActions.doneTask(this.props.task.id, this.props.date);
  }

  render() {
    const buttonPlay = (this.props.task.status === 1) ?
      <td className="is-icon" onClick={this.playTask}>
        <i className="fa fa-play" />
      </td>
      : false;

    const buttonDone = (this.props.task.status === 2) ?
      <td className="is-icon" onClick={this.doneTask}>
        <i className="fa fa-check" />
      </td>
      : false;

    return (
      <tr>
        <td>
          {this.props.task.text}
        </td>
        {buttonDone}
        {buttonPlay}
        <td className="is-icon">
          <i className="fa fa-pencil" />
        </td>
        <td className="is-icon" onClick={this.removeTask}>
          <i className="fa fa-trash" />
        </td>
      </tr>
    );
  }
}

Task.propTypes = propTypes;
