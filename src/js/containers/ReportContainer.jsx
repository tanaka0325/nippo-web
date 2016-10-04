import connectToStores from 'alt-utils/lib/connectToStores';
import React, { PropTypes, Component } from 'react';

import DateStore from '../stores/DateStore';
import ReportStore from '../stores/ReportStore';
import Report from '../components/Report.jsx';
import ReportForm from '../components/ReportForm.jsx';
import ReportActions from '../actions/ReportActions';

const propTypes = {
  date: PropTypes.string.isRequired,
  report: PropTypes.object,
};

class ReportContainer extends Component {
  static getStores() {
    return [DateStore, ReportStore];
  }
  static getPropsFromStores() {
    return {
      ...DateStore.getState(),
      ...ReportStore.getState(),
    };
  }

  componentDidMount() {
    ReportActions.updateReport(this.props.date);
  }

  render() {
    const component = (this.props.report) ? (
      <Report report={this.props.report} />
    ) : (
      <ReportForm date={this.props.date} />
    );

    return (
      <div className="column">
        { component }
      </div>
    );
  }
}

ReportContainer.propTypes = propTypes;
export default connectToStores(ReportContainer);
