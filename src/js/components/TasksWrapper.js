import React, { PropTypes } from 'react';

import Tasks from './Tasks';
import TaskForm from '../components/TaskForm';
import Utils from '../utils';

const propTypes = {
  date: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};

const TasksWrapper = (props) => {
  const tasksTodo = [];
  const tasksDoing = [];
  const tasksDone = [];
  props.tasks.forEach((task) => {
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
  const taskForm = Utils.isToday(props.date) ? <TaskForm date={props.date} /> : '';

  return (
    <div className="column">
      <article className="message">
        <div className="message-header">
          Tasks
        </div>
        <div className="message-body">
          {taskForm}
          <Tasks tasks={tasksTodo} date={props.date} label="TODO" />
          <Tasks tasks={tasksDoing} date={props.date} label="DOING" />
          <Tasks tasks={tasksDone} date={props.date} label="DONE" />
        </div>
      </article>
    </div>
  );
};


TasksWrapper.propTypes = propTypes;
export default TasksWrapper;
