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
        .get(`http://localhost:9998/timeline/date/${date}`)
        .end((err, res) => {
          dispatch(res.body);
        });
    };
  }

  reverseTimeline() {
    return true;
  }

}

module.exports = alt.createActions(TimelineActions);
