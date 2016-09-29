import request from 'superagent';

import alt from '../alt.js';
import Utils from '../utils';
import TimelineActions from './TimelineActions';

class TaskActions {
  updateDate(date) {
    this.updateTasks(date);
    return date;
  }

  addTask(text) {
    const date = Utils.getToday();
    const task = {
      user_id: 1,
      text,
      date,
      status: 1,
      priority: 1,
    };
    request
      .post('http://localhost:3000/tasks')
      .set('Accept', 'application/json')
      .send(task)
      .end((err) => {
        if (err) throw err;
        this.updateTasks(date);
        return task;
      });
  }

  removeTask(id) {
    const date = Utils.getToday();
    request
      .delete(`http://localhost:3000/tasks/${id}`)
      .set('Accept', 'application/json')
      .end((err) => {
        if (err) throw err;
        this.updateTasks(date);
      });
  }

  doneTask(id) {
    const date = Utils.getToday();
    request
      .patch(`http://localhost:3000/tasks/${id}`)
      .set('Accept', 'application/json')
      .send({ status: 3 })
      .end((err) => {
        if (err) throw err;
        this.updateTasks(date);
      });
  }

  updateTasks(date) {
    return (dispatch) => {
      request
        .get(`http://localhost:3000/tasks/date/${date}`)
        .end((err, res) => {
          dispatch(res.body);
          TimelineActions.updateTimeline(date);
        });
    };
  }
}

module.exports = alt.createActions(TaskActions);
