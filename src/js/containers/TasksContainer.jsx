import React from 'react';
import request from 'superagent';

import Tasks from '../components/Tasks.jsx';

export default class TasksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.getTasksFromServer = this.getTasksFromServer.bind(this);
  }

  componentDidMount() {
    this.getTasksFromServer();
    // setInterval(this.getTasksFromServer, this.props.pollInterval);
  }

  getTasksFromServer() {
    request
      .get('http://localhost:3000/tasks')
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
    this.state.tasks.map((task) => {
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
      <div>
        <Tasks tasks={tasksTodo} />
        <Tasks tasks={tasksDoing} />
        <Tasks tasks={tasksDone} />
        <br />
      </div>
    );
  }
}
