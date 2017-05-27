import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteTodo extends Component {
  static propTypes = {
    remove: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { remove } = this.props;
    const { cle } = this.props;
    remove(cle);
    // console.log(remove());
  };

  render() {
    const test = 0;
    return <button onClick={this.handleClick}>X</button>;
  }
}
export default DeleteTodo;
