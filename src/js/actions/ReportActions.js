import request from 'superagent';

import alt from '../alt.js';

class ReportActions {
  updateReport(date) {
    return (dispatch) => {
      request
        .get(`http://localhost:3000/reports/date/${date}`)
        .end((err, res) => {
          dispatch(res.body);
          if (res.body === null) {
            this.editReport(true);
          } else {
            this.editReport(false);
          }
        });
    };
  }

  _updateReport(id, title, body, date) {
    return (dispatch) => {
      request
        .patch(`http://localhost:3000/reports/${id}`)
        .set('Accept', 'application/json')
        .send({ title, body })
        .end((err, res) => {
          if (err) throw err;
          dispatch(res.body);
          this.updateReport(date);
        });
    };
  }

  postReport(title, body, date) {
    const report = {
      user_id: 1,
      title,
      body,
      date,
    };
    request
      .post('http://localhost:3000/reports')
      .set('Accept', 'application/json')
      .send(report)
      .end((err) => {
        if (err) throw err;
        this.updateReport(date);
        return report;
      });
  }

  editReport(bool) {
    return (dispatch) => {
      dispatch(bool);
    };
  }
}

module.exports = alt.createActions(ReportActions);
