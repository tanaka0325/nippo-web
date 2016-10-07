import React, { Component, PropTypes } from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

import ReportActions from '../actions/ReportActions';
import ReportForm from './ReportForm.jsx';

const propTypes = {
  date: PropTypes.string.isRequired,
  report: PropTypes.object,
  editable: PropTypes.bool.isRequired,
};

class Report extends Component {
  constructor(props) {
    super(props);

    this.editReport = this.editReport.bind(this);
  }

  editReport() {
    ReportActions.editReport(true);
  }

  render() {
    const element = (this.props.report && !this.props.editable) ? (
      () => {
        const md = new MarkdownIt({
          breaks: true,
          highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return hljs.highlight(lang, str).value;
              } catch (__) {}
            }
            return '';
          },
        });
        const result = md.render(this.props.report.body || '');

        return (
          <div className="message-body content">
            {/* <h1>{this.props.report.title}</h1> */}
            <p dangerouslySetInnerHTML={{ __html: result }} />
            <a className="button is-dark" onClick={this.editReport}>Edit</a>
          </div>
        );
      }
    )() : (
      <ReportForm date={this.props.date} report={this.props.report} />
    );

    return (
      <article className="message">
        <div className="message-header">
          Report
        </div>
        { element }
      </article>
    );
  }
}

Report.propTypes = propTypes;
export default Report;
