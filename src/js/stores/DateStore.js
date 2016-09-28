import alt from '../alt';
import DateActions from '../actions/DateActions';
import Utils from '../utils';

class DateStore {
  constructor() {
    this.bindListeners({
      changeDate: DateActions.changeDate,
    });

    this.date = Utils.getToday();
  }

  changeDate(date) {
    this.date = date;
  }
}

module.exports = alt.createStore(DateStore);
