import React, { Component, PropTypes } from 'react';
import DateActions from '../actions/DateActions';
import Utils from '../utils';

const propTypes = {
  date: PropTypes.string.isRequired,
};

class DateHeader extends Component {
  constructor(props) {
    super(props);

    this.goPrevDate = this.goPrevDate.bind(this);
    this.goNextDate = this.goNextDate.bind(this);
    this.goToday = this.goToday.bind(this);
  }

  goPrevDate() {
    DateActions.changeDate(Utils.getRelativeDate(this.props.date, -1));
  }

  goNextDate() {
    DateActions.changeDate(Utils.getRelativeDate(this.props.date, 1));
  }

  goToday() {
    const today = Utils.getToday();
    DateActions.changeDate(today);
  }

  render() {
    return (
      <div className="section date-header">
        <div className="container content is-large">
          <div className="columns">
            <div className="column is-4 has-text-right">
              <a onClick={this.goPrevDate}>◀</a>
            </div>
            <div className="column is-4 has-text-centered">
              {/* <a onClick={this.goToday}> */}
                {this.props.date}
              {/* </a> */}
            </div>
            <div className="column is-4 has-text-left">
              <a onClick={this.goNextDate}>▶</a>
            </div>
          </div>
          {/* <div className="columns">
            <div className="column">
              <div className="column has-text-centered">
                <a className="button" onClick={this.goToday}>Today</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

DateHeader.propTypes = propTypes;
export default DateHeader;
