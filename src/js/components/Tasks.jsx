import React, { PropTypes } from 'react';

import Task from './Task.jsx';

const propTypes = {
  label: PropTypes.string.isRequired,
  tasks: PropTypes.array,
};

export default class Tasks extends React.Component {
  render() {
    const tasks = this.props.tasks.map(task => <Task key={task.id} task={task} />);

    const clx = () => {
      switch (this.props.label) {
        case 'TODO':
          return 'is-danger';
        case 'DOING':
          return 'is-warning';
        case 'DONE':
          return 'is-success';
        default:
          return '';
      }
    };

    return (
      <article className={`message ${clx()}`}>
        <h3 className="message-header">{this.props.label}</h3>
        <div className="message-body">
          <table className="table">
            <tbody>
              {tasks}
            </tbody>
          </table>
        </div>
      </article>
    );
  }
}

Tasks.propTypes = propTypes;
