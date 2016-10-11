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
    this.changeTab = this.changeTab.bind(this);

    this.state = {
      activeTab: 'html',
    };
  }

  editReport() {
    ReportActions.editReport(true);
  }

  changeTab(e) {
    this.setState({
      activeTab: e.target.name,
    });
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
        const htmlText = md.render(this.props.report.body || '');
        const mdText = this.props.report.body;

        const tabHtmlClx = (this.state.activeTab === 'html') ? 'is-active' : '';
        const tabMdlClx = (this.state.activeTab === 'md') ? 'is-active' : '';

        const renderBody = (this.state.activeTab === 'html') ? (
          <p dangerouslySetInnerHTML={{ __html: htmlText }} />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: mdText.replace(/\n/g, '<br/>') }} />
        );

        return (
          <div className="message-body">
            <div className="tabs is-small is-toggle is-fullwidth">
              <ul>
                <li className={tabHtmlClx}><a name="html" onClick={this.changeTab}>HTML</a></li>
                <li className={tabMdlClx}><a name="md" onClick={this.changeTab}>Markdown</a></li>
              </ul>
            </div>
            <div className="content">
              {/* <h1>{this.props.report.title}</h1> */}
              {renderBody}
              <p className="control is-grouped is-grouped-centered">
                <a className="button is-dark" onClick={this.editReport}>Edit</a>
              </p>
            </div>
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
