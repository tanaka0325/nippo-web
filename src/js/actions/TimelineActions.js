import request from 'superagent';
import alt from '../alt.js';

class TimelineActions {
  updateDate(date) {
    this.updateTimeline(date);
    return date;
  }

  updateTimeline(date) {
    return (dispatch) => {
      request
        .get(`http://localhost:3000/timeline/date/${date}`)
        .end((err, res) => {
          dispatch(res.body);
        });
    };
  }

}

module.exports = alt.createActions(TimelineActions);
