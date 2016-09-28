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
  }

  goPrevDate() {
    DateActions.changeToDate(Utils.getRelativeDate(this.props.date, -1));
  }

  goNextDate() {
    DateActions.changeToDate(Utils.getRelativeDate(this.props.date, 1));
  }

  render() {
    return (
      <div className="section">
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <a onClick={this.goPrevDate}>◀</a>
            </div>
            <div className="nav-center">
              {this.props.date}
            </div>
            <div className="nav-right">
              <a onClick={this.goNextDate}>▶</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

DateHeader.propTypes = propTypes;
export default DateHeader;
