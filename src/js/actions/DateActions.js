import alt from '../alt.js';
import TimelineActions from './TimelineActions';

class DateActions {
  changeDate(date) {
    TimelineActions.updateDate(date);
    return date;
  }
}

module.exports = alt.createActions(DateActions);
