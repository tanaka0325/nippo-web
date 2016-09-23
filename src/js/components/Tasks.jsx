import React from 'react';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks.map((task) => {
      return (
        <tr key={task.id}>
          <td>
            <input type="checkbox" id={task.id} name={task.id} value={task.id} />
            <label htmlFor={task.id}>{task.text}</label>
          </td>
        </tr>
      );
    });

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
