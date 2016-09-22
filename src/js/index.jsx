import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header.jsx';
import DateHeader from './components/DateHeader.jsx';
import Diary from './components/Diary.jsx';
import TasksContainer from './containers/TasksContainer.jsx';

render(
  <div>
    Hello react<br />
    <Header />
    <DateHeader />
    <Diary />
    <TasksContainer />
  </div>,
  document.getElementById('content')
);
