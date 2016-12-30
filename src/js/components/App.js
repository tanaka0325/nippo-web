import React from 'react';

import Header from './Header';
import DateHeaderContainer from '../containers/DateHeaderContainer';
import TweetContainer from '../containers/TweetContainer';
import TasksContainer from '../containers/TasksContainer';
import TimelineContainer from '../containers/TimelineContainer';
import ReportContainer from '../containers/ReportContainer';

import Utils from '../utils.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const today = Utils.getToday();
    this.state = {
      date: today,
      leftPane: 'tasks',
    };

    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    this.setState({
      leftPane: e.target.name,
    });
  }

  render() {
    const leftPane = (this.state.leftPane === 'tasks') ? (
      <TasksContainer date={this.state.date} />
    ) : (
      <ReportContainer />
    );

    return (
      <div>
        <Header />
        <DateHeaderContainer />
        <TweetContainer />
        <div className="section">
        <div className="tabs">
          <ul>
            <li onClick={this._onClick}><a name="tasks">Tasks</a></li>
            <li onClick={this._onClick}><a name="report">Report</a></li>
          </ul>
        </div>
          <div className="columns">
            {leftPane}
            <TimelineContainer />
          </div>
        </div>
      </div>
    );
  }
}
