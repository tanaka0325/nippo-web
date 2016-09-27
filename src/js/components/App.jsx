import React from 'react';

import Header from './Header.jsx';
import DateHeader from './DateHeader.jsx';
import TweetContainer from '../containers/TweetContainer.jsx';
import TasksContainer from '../containers/TasksContainer.jsx';
import TimelineContainer from '../containers/TimelineContainer.jsx';

import Utils from '../utils.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const today = Utils.getToday();
    this.state = {
      date: today,
    };

    this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
  }

  prevDate() {
    const yesterday = Utils.getYeasterday();
    this.setState({
      date: yesterday,
    });
  }

  nextDate() {
    const tomorrow = Utils.getTomorrow();
    this.setState({
      date: tomorrow,
    });
  }

  render() {
    const tweetForm = Utils.isToday(this.state.date) ? <TweetContainer date={this.state.date} /> : '';

    return (
      <div>
        <Header />
        <DateHeader
          date={this.state.date}
          prevDate={this.prevDate}
          nextDate={this.nextDate}
        />
        {tweetForm}
        <div className="section">
          <div className="columns">
            <TasksContainer date={this.state.date} />
            <TimelineContainer date={this.state.date} />
          </div>
        </div>
      </div>
    );
  }
}
