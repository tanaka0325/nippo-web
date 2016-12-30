import connectToStores from 'alt-utils/lib/connectToStores';
import React, { PropTypes, Component } from 'react';

import DateStore from '../stores/DateStore';
import ReportStore from '../stores/ReportStore';
import Report from '../components/Report';
import ReportForm from '../components/ReportForm';
import ReportActions from '../actions/ReportActions';

const propTypes = {
  date: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
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

  componentWillMount() {
    ReportActions.updateReport(this.props.date);
  }

  render() {
    return (
      <div className="column report">
        <Report date={this.props.date} report={this.props.report} editable={this.props.editable} />
      </div>
    );
  }
}

ReportContainer.propTypes = propTypes;
export default connectToStores(ReportContainer);
