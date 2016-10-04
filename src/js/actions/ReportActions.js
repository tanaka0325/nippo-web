import request from 'superagent';

import alt from '../alt.js';

class ReportActions {
  updateReport(date) {
    return (dispatch) => {
      request
        .get(`http://localhost:3000/reports/date/${date}`)
        .end((err, res) => {
          dispatch(res.body);
        });
    };
  }

  portReport(title, body, date) {
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
        return report;
      });
  }
}

module.exports = alt.createActions(ReportActions);
