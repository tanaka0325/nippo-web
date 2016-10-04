import alt from '../alt';
import ReportActions from '../actions/ReportActions';

class ReportStore {
  constructor() {
    this.bindListeners({
      updateReport: ReportActions.updateReport,
      // postReport: ReportActions.postReport,
    });

    this.report = {};
  }

  updateReport(report) {
    this.report = report;
  }

  // postReport(report) {
  //   this.report = report;
  // }
}

module.exports = alt.createStore(ReportStore);
