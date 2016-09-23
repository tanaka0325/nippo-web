import React, { PropTypes } from 'react';

import Task from './Task.jsx';

const propTypes = {
  label: PropTypes.string.isRequired,
  tasks: PropTypes.array,
};

export default class Tasks extends React.Component {
  render() {
    const tasks = this.props.tasks.map(task => <Task key={task.id} task={task} />);

    return (
      <div className="content">
        <h3>{this.props.label}</h3>
        <table className="table">
          <tbody>
            {tasks}
          </tbody>
        </table>
      </div>
    );
  }
}

Tasks.propTypes = propTypes;
