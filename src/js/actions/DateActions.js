import alt from '../alt.js';
import TimelineActions from './TimelineActions';
import TaskActions from './TaskActions';

class DateActions {
  changeDate(date) {
    TimelineActions.updateDate(date);
    TaskActions.updateDate(date);
    return date;
  }
}

module.exports = alt.createActions(DateActions);
