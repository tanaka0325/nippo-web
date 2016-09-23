import React from 'react';

const DateHeader = () => {
  const today = new Date();
  return (
    <div className="section">
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a>◀</a>
          </div>
          <div className="nav-center">
            {today.getFullYear()}/{today.getMonth()}/{today.getDate()}
          </div>
          <div className="nav-right">
            <a>▶</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DateHeader;
