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
        <td className="is-icon">
          <i className="fa fa-check" />
        </td>
        <td className="is-icon">
          <i className="fa fa-pencil" />
        </td>
        <td className="is-icon">
          <i className="fa fa-trash" />
        </td>
      </tr>
    );
  }
}

Task.propTypes = propTypes;
