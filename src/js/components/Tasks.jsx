import React from 'react';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <h3>{this.props.label}</h3>
        <span>{JSON.stringify(this.props.tasks)}</span>
      </div>
    );
  }
}
