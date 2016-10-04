import React, { Component, PropTypes } from 'react';

import ReportActions from '../actions/ReportActions';

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

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  _onSubmit(e) {
    e.preventDefault();
    ReportActions.postReport(this.state.title, this.state.body, this.props.date);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <article className="message">
        <div className="message-header">
          Report
        </div>
        <div className="message-body">
          <form onSubmit={this._onSubmit}>

            <label className="label" htmlFor="title">Title</label>
            <p className="control">
              <input
                name="title"
                type="text"
                className="input"
                value={this.state.title}
                onChange={this._onChange}
              />
            </p>
            <label className="label" htmlFor="body">body</label>
            <p className="control">
              <textarea
                name="body"
                className="textarea"
                value={this.state.body}
                onChange={this._onChange}
              />
            </p>
            <p className="control is-grouped is-grouped-centered">
              <button className="button is-dark">Submit</button>
            </p>
          </form>
        </div>
      </article>
    );
  }
}

ReportForm.propTypes = propTypes;
export default ReportForm;
