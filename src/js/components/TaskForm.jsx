import React, { PropTypes } from 'react';
import TaskActions from '../actions/TaskActions';

const propTypes = {
  date: PropTypes.string.isRequired,
};

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this._onChange = this._onChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  _onChange(e) {
    this.setState({ text: e.target.value });
  }

  addTask(e) {
    e.preventDefault();
    if (this.state.text !== '') {
      this.setState({ text: '' });
      TaskActions.addTask(this.state.text);
    }
  }

  render() {
    return (
      <div className="task-form">
        <form onSubmit={this.addTask}>
          <div className="control is-grouped">
            <p className="control is-expanded">
              <input
                className="input"
                value={this.state.text}
                type="text"
                placeholder="何やるの？"
                onChange={this._onChange}
              />
            </p>
            <p className="control">
              <input className="button is-dark" type="submit" value="Add" />
            </p>
          </div>
        </form>
      </div>
    );
  }
}

TaskForm.propTypes = propTypes;
