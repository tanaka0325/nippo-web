import React, { PropTypes } from 'react';

import TaskActions from '../actions/TaskActions';

const propTypes = {
  task: PropTypes.object.isRequired,
};

export default class Task extends React.Component {
  constructor(props) {
    super(props);

    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  removeTask() {
    TaskActions.removeTask(this.props.task.id);
  }

  doneTask() {
    TaskActions.doneTask(this.props.task.id);
  }

  render() {
    const buttonDone = (this.props.task.status !== 3) ?
      <td className="is-icon" onClick={this.doneTask}>
        <i className="fa fa-check" />
      </td>
      : <td />;

    return (
      <tr>
        <td>
          {this.props.task.text}
        </td>
        {buttonDone}
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
