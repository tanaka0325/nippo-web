import React, { PropTypes } from 'react';

import Tasks from './Tasks.jsx';
import TaskForm from '../components/TaskForm.jsx';
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
          <Tasks tasks={tasksTodo} label="TODO" />
          <Tasks tasks={tasksDoing} label="DOING" />
          <Tasks tasks={tasksDone} label="DONE" />
        </div>
      </article>
    </div>
  );
};


TasksWrapper.propTypes = propTypes;
export default TasksWrapper;
