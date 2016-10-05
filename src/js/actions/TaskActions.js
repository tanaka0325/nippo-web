import request from 'superagent';

import alt from '../alt.js';
import TimelineActions from './TimelineActions';
import Utils from '../utils';

class TaskActions {
  updateDate(date) {
    this.updateTasks(date);
    return date;
  }

  addTask(text, date) {
    const task = {
      user_id: 1,
      text,
      date,
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

  removeTask(id, date) {
    request
      .delete(`http://localhost:3000/tasks/${id}`)
      .set('Accept', 'application/json')
      .end((err) => {
        if (err) throw err;
        this.updateTasks(date);
      });
  }

  doneTask(id, date) {
    request
      .patch(`http://localhost:3000/tasks/${id}`)
      .set('Accept', 'application/json')
      .send({ status: 3 })
      .end((err) => {
        if (err) throw err;
        this.updateTasks(date);
      });
  }

  playTask(id, date) {
    request
      .patch(`http://localhost:3000/tasks/${id}`)
      .set('Accept', 'application/json')
      .send({ status: 2 })
      .end((err) => {
        if (err) throw err;
        this.updateTasks(date);
      });
  }

  moveToday(id, date) {
    const today = Utils.getToday();
    console.log(today);
    request
      .patch(`http://localhost:3000/tasks/${id}`)
      .set('Accept', 'application/json')
      .send({ date: today })
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
