import React, { PropTypes } from 'react';
import request from 'superagent';

const propTypes = {
  date: PropTypes.string.isRequired,
};

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
    };

    this._onChange = this._onChange.bind(this);
    this.AddTask = this.AddTask.bind(this);
  }

  _onChange(e) {
    this.setState({ task: e.target.value });
  }

  AddTask(e) {
    e.preventDefault();
    if (this.state.task !== '') {
      this.setState({ task: '' });
      request
        .post('http://localhost:3000/tasks')
        .set('Accept', 'application/json')
        .send({
          user_id: 1,
          text: this.state.task,
          date: this.props.date,
          status: 1,
          priority: 1,
        })
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    }
  }

  render() {
    return (
      <form onSubmit={this.AddTask}>
        <div className="control is-grouped">
          <p className="control is-expanded">
            <input
              className="input"
              value={this.state.task}
              type="text"
              placeholder="何やるの？"
              onChange={this._onChange}
            />
          </p>
          <p className="control">
            <input
              className="button is-danger"
              type="submit"
              value="Add"
            />
          </p>
        </div>
      </form>
    );
  }
}

TaskForm.propTypes = propTypes;
