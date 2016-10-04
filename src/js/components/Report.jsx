import React, { Component, PropTypes } from 'react';

const propTypes = {
  report: PropTypes.object,
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
    const title = (this.props.report) ? this.props.report.title : false;
    const body = (this.props.report) ? this.props.report.body : false;

    return (
      <div className="column">
        <article className="message">
          <div className="message-header">
            Report
          </div>
          <div className="message-body">
            <form>
              <p className="control">
                {title}
                {/* <input type="text" value={this.state.title} /> */}
              </p>
              <p className="control">
                {body}
                {/* <textarea name="body" value={this.state.body} /> */}
              </p>
            </form>
          </div>
        </article>
      </div>
    );
  }
}

Report.propTypes = propTypes;
export default Report;
