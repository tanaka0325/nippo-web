import React, { PropTypes } from 'react';

const propTypes = {
  date: PropTypes.string.isRequired,
  prevDate: PropTypes.func.isRequired,
  nextDate: PropTypes.func.isRequired,
};

export default class DateHeader extends React.Component {
  constructor(props) {
    super(props);

    this._onClickPrevDate = this._onClickPrevDate.bind(this);
    this._onClickNextDate = this._onClickNextDate.bind(this);
  }

  _onClickPrevDate() {
    this.props.prevDate();
  }

  _onClickNextDate() {
    this.props.nextDate();
  }

  render() {
    return (
      <div className="section">
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <a onClick={this._onClickPrevDate}>◀</a>
            </div>
            <div className="nav-center">
              {this.props.date}
            </div>
            <div className="nav-right">
              <a onClick={this._onClickNextDate}>▶</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

DateHeader.propTypes = propTypes;
