import React, { PropTypes } from 'react';
import request from 'superagent';

const propTypes = {
  date: PropTypes.string.isRequired,
};

export default class TweetContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
    };

    this._onChange = this._onChange.bind(this);
    this.postTweet = this.postTweet.bind(this);
  }

  _onChange(e) {
    this.setState({ tweet: e.target.value });
  }

  postTweet(e) {
    e.preventDefault();
    if (this.state.tweet !== '') {
      this.setState({ tweet: '' });
      request
        .post('http://localhost:3000/tweets')
        .set('Accept', 'application/json')
        .send({
          user_id: 1,
          message: this.state.tweet,
          date: this.props.date,
          status: 1,
        })
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    }
  }

  render() {
    const divStyle = {
      maxWidth: '600px',
    };

    return (
      <div className="section">
        <div className="container" style={divStyle}>
          <form onSubmit={this.postTweet}>
            <div className="control is-grouped">
              <p className="control is-expanded">
                <input
                  className="input"
                  value={this.state.tweet}
                  type="text"
                  placeholder="いま何してる？"
                  onChange={this._onChange}
                />
              </p>
              <p className="control">
                <input
                  className="button is-info"
                  type="button"
                  value="Tweet"
                />
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

TweetContainer.propTypes = propTypes;
