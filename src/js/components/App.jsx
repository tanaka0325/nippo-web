import React from 'react';

import Header from './Header.jsx';
import DateHeaderContainer from '../containers/DateHeaderContainer.jsx';
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
  }

  render() {
    const tweetForm = Utils.isToday(this.state.date) ? <TweetContainer date={this.state.date} /> : '';

    return (
      <div>
        <Header />
        <DateHeaderContainer
          date={this.state.date}
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
