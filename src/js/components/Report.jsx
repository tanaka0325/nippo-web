import React, { Component, PropTypes } from 'react';

const propTypes = {
  report: PropTypes.object.isRequired,
};

class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.report.title,
      body: props.report.body,
    };
  }

  render() {
    return (
      <article className="message">
        <div className="message-header">
          Report
        </div>
        <div className="message-body content">
          <h3>{this.props.report.title}</h3>
          <p>{this.props.report.body}</p>
        </div>
      </article>
    );
  }
}

Report.propTypes = propTypes;
export default Report;
