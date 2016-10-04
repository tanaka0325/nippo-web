import alt from '../alt.js';
import TimelineActions from './TimelineActions';
import TaskActions from './TaskActions';
import ReportActions from './ReportActions';

class DateActions {
  changeDate(date) {
    TimelineActions.updateDate(date);
    TaskActions.updateDate(date);
    ReportActions.updateReport(date);
    return date;
  }
}

module.exports = alt.createActions(DateActions);
