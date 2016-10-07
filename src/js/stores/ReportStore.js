import alt from '../alt';
import ReportActions from '../actions/ReportActions';

class ReportStore {
  constructor() {
    this.bindListeners({
      updateReport: ReportActions.updateReport,
      postReport: ReportActions.postReport,
      editReport: ReportActions.editReport,
    });

    this.report = {};
    this.editable = true;
  }

  updateReport(report) {
    this.report = report;
  }

  postReport(report) {
    this.report = report;
  }

  editReport(bool) {
    this.editable = bool;
  }
}

module.exports = alt.createStore(ReportStore);
