import React from 'react';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>{JSON.stringify(this.props.tasks)}</p>
    );
  }
}
