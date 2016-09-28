import alt from '../alt';
import DateActions from '../actions/DateActions';
import Utils from '../utils';

class DateStore {
  constructor() {
    this.bindListeners({
      changeToDate: DateActions.changeToDate,
    });

    this.date = Utils.getToday();
  }

  changeToDate(date) {
    this.date = date;
  }
}

module.exports = alt.createStore(DateStore);
