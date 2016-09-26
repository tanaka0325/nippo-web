import React, { PropTypes } from 'react';
import request from 'superagent';

export default class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // getTimelineFromServer(date) {
  //   request
  //     .get(`http://localhost:3000/timeline/date/${date}`)
  //     .end((err, res) => {
  //       if (err) {
  //         throw err;
  //       }
  //       this.setState({ timelines: res.body });
  //     });
  // }

  render() {
    const divStyle = {
      maxWidth: '600px',
    };

    return (
      <div className="section">
        <div className="container" style={divStyle}>
          <div className="control is-grouped">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="いま何してる？" />
            </p>
            <p className="control">
              <a className="button is-info">
                Tweet
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
