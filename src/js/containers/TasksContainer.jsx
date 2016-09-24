import React, { PropTypes } from 'react';
import request from 'superagent';

import Tasks from '../components/Tasks.jsx';

const propTypes = {
  date: PropTypes.string.isRequired,
};

export default class TasksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.getTasksFromServer = this.getTasksFromServer.bind(this);
  }

  componentDidMount() {
    this.getTasksFromServer(this.props.date);
  }

  componentWillReceiveProps(nextProps) {
    this.getTasksFromServer(nextProps.date);
  }

  getTasksFromServer(date) {
    request
      .get(`http://localhost:3000/tasks/date/${date}`)
      .end((err, res) => {
        if (err) {
          throw err;
        }
        this.setState({ tasks: res.body });
      });
  }

  render() {
    const tasksTodo = [];
    const tasksDoing = [];
    const tasksDone = [];
    this.state.tasks.forEach((task) => {
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
          console.log('needs error handling.');
      }
    });

    return (
      <div className="column">
        <Tasks tasks={tasksTodo} label="TODO" />
        <Tasks tasks={tasksDoing} label="DOING" />
        <Tasks tasks={tasksDone} label="DONE" />
        <br />
      </div>
    );
  }
}

TasksContainer.propTypes = propTypes;
