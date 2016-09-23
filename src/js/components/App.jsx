import React from 'react';

import Header from './Header.jsx';
import DateHeader from './DateHeader.jsx';
import Diary from './Diary.jsx';
import TasksContainer from '../containers/TasksContainer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
    };
  }

  render() {
    return (
      <div>
        <Header />
        <DateHeader />
        <div className="section">
          <div className="columns">
            <TasksContainer />
            <Diary />
          </div>
        </div>
      </div>
    );
  }
}
