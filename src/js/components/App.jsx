import React from 'react';

import Header from './Header.jsx';
import DateHeader from './DateHeader.jsx';
import Diary from './Diary.jsx';
import TasksContainer from '../containers/TasksContainer.jsx';
import TimelineContainer from '../containers/TimelineContainer.jsx';

import Utils from '../utils.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();
    this.state = {
      date: today,
    };

    this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
  }

  prevDate() {
    const date = new Date(this.state.date.setDate(this.state.date.getDate() - 1));
    this.setState({
      date,
    });
  }

  nextDate() {
    const date = new Date(this.state.date.setDate(this.state.date.getDate() + 1));
    this.setState({
      date,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <DateHeader
          date={Utils.formatDate(this.state.date)}
          prevDate={this.prevDate}
          nextDate={this.nextDate}
        />
        <div className="section">
          <div className="columns">
            <TasksContainer date={Utils.formatDate(this.state.date)} />
            <Diary date={Utils.formatDate(this.state.date)} />
            <TimelineContainer date={Utils.formatDate(this.state.date)} />
          </div>
        </div>
      </div>
    );
  }
}
