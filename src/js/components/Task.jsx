import React, { PropTypes } from 'react';

const propTypes = {
  task: PropTypes.object.isRequired,
};

export default class Task extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.task.text}
        </td>
      </tr>
    );
  }
}

Task.propTypes = propTypes;
