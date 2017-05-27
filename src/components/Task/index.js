import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  handleClick = () => {
    const { id } = this.props.data;
    const { remove } = this.props;

    remove(id);
  };
  render() {
    const { name } = this.props.data;
    return (
      <li>
        <h6>
          {name}
          <button onClick={this.handleClick}>X</button>
        </h6>
      </li>
    );
  }
}

Task.propTypes = {
  remove: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Task;
