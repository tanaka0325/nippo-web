import connectToStores from 'alt-utils/lib/connectToStores';
import React, { PropTypes, Component } from 'react';

import DateStore from '../stores/DateStore';
import TaskStore from '../stores/TaskStore';
import TaskActions from '../actions/TaskActions';
import TasksWrapper from '../components/TasksWrapper';

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
    return (
      <TasksWrapper tasks={this.props.tasks} date={this.props.date} />
    );
  }
}

TaskContainer.propTypes = propTypes;
export default connectToStores(TaskContainer);
