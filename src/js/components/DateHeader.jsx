import React from 'react';

const DateHeader = () => {
  const today = new Date();
  return (
    <div>
      ◀{today.getFullYear()}/{today.getMonth()}/{today.getDate()}▶
    </div>
  );
};

export default DateHeader;
