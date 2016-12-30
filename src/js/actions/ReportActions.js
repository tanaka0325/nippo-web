import request from 'superagent';

import alt from '../alt.js';

class ReportActions {
  updateReport(date) {
    return (dispatch) => {
      request
        .get(`http://localhost:9998/reports/date/${date}`)
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

  _updateReport(id, body, date) {
    return (dispatch) => {
      request
        .patch(`http://localhost:9998/reports/${id}`)
        .set('Accept', 'application/json')
        .send({ body })
        .end((err, res) => {
          if (err) throw err;
          dispatch(res.body);
          this.updateReport(date);
        });
    };
  }

  postReport(body, date) {
    const report = {
      user_id: 1,
      title: `${date}日報`,
      body,
      date,
    };
    request
      .post('http://localhost:9998/reports')
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
