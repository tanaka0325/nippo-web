import request from 'superagent';

import alt from '../alt.js';
import Utils from '../utils';
import TimelineActions from './TimelineActions';

class TweetActions {
  postTweet(message) {
    const date = Utils.getToday();
    request
      .post('http://localhost:3000/tweets')
      .set('Accept', 'application/json')
      .send({ user_id: 1, message, date, status: 1 })
      .end((err) => {
        if (err) throw err;
        this.sendTimeline(date);
      });
    return true;
  }

  sendTimeline(date) {
    TimelineActions.updateTimeline(date);
    return true;
  }
}

module.exports = alt.createActions(TweetActions);
