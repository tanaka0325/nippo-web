import React, { Component, PropTypes } from 'react';

const propTypes = {
  date: PropTypes.string.isRequired,
};

class ReportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  render() {
    return (
      <article className="message">
        <div className="message-header">
          Report
        </div>
        <div className="message-body">
          <form>
            <p className="control">
              <input type="text" value={this.state.title} />
            </p>
            <p className="control">
              <textarea name="body" value={this.state.body} />
            </p>
          </form>
        </div>
      </article>
    );
  }
}

ReportForm.propTypes = propTypes;
export default ReportForm;
