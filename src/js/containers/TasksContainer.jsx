import connectToStores from 'alt-utils/lib/connectToStores';
import React, { PropTypes, Component } from 'react';

import DateStore from '../stores/DateStore';
import TaskStore from '../stores/TaskStore';
import TaskActions from '../actions/TaskActions';
import Tasks from '../components/Tasks.jsx';
import TaskForm from '../components/TaskForm.jsx';
import Utils from '../utils';

const propTypes = {
  date: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};

class TaskContainer extends Component {
  static getStores() {
    return [DateStore, TaskStore];
  }
  static getPropsFromStores() {
    return {
      ...DateStore.getState(),
      ...TaskStore.getState(),
    };
  }

  componentDidMount() {
    TaskActions.updateTasks(this.props.date);
  }

  render() {
    const tasksTodo = [];
    const tasksDoing = [];
    const tasksDone = [];
    this.props.tasks.forEach((task) => {
      switch (task.status) {
        case 1:
          tasksTodo.push(task);
          break;
        case 2:
          tasksDoing.push(task);
          break;
        case 3:
          tasksDone.push(task);
          break;
        default:
          break;
      }
    });

    const taskForm = Utils.isToday(this.props.date) ? <TaskForm date={this.props.date} /> : '';

    return (
      <div className="column">
        {taskForm}
        <Tasks tasks={this.props.tasks} label="TODO" />
        <Tasks tasks={tasksDoing} label="DOING" />
        <Tasks tasks={tasksDone} label="DONE" />
      </div>
    );
  }
}

TaskContainer.propTypes = propTypes;
export default connectToStores(TaskContainer);
