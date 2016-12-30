import request from 'superagent';

import alt from '../alt.js';
import TimelineActions from './TimelineActions';

class TweetActions {
  postTweet(text, date) {
    request
      .post('http://localhost:9998/tweets')
      .set('Accept', 'application/json')
      .send({ user_id: 1, text, date })
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
