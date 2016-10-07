import React, { Component, PropTypes } from 'react';

import ReportActions from '../actions/ReportActions';
import ReportForm from './ReportForm.jsx';

const propTypes = {
  date: PropTypes.string.isRequired,
  report: PropTypes.object,
  editable: PropTypes.bool.isRequired,
};

class Report extends Component {
  constructor(props) {
    super(props);

    this.editReport = this.editReport.bind(this);
  }

  editReport() {
    ReportActions.editReport(true);
  }

  render() {
    const element = (this.props.report && !this.props.editable) ? (
      <div className="message-body content">
        <h3>{this.props.report.title}</h3>
        <p>{this.props.report.body}</p>
        <a className="button is-dark" onClick={this.editReport}>Button</a>
      </div>
    ) : (
      <ReportForm date={this.props.date} report={this.props.report} />
    );

    return (
      <article className="message">
        <div className="message-header">
          Report
        </div>
        { element }
      </article>
    );
  }
}

Report.propTypes = propTypes;
export default Report;
