import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header.jsx';
import DateHeader from './components/DateHeader.jsx';
import Diary from './components/Diary.jsx';
import TasksContainer from './containers/TasksContainer.jsx';

render(
  <div>
    <Header />
    <DateHeader />
    <div className="section">
      <div className="columns">
        <TasksContainer />
        <Diary />
      </div>
    </div>
  </div>,
  document.getElementById('content')
);
