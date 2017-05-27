import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTodo extends Component {
  state = {
    name: '',
  };

  static propTypes = {
    create: PropTypes.func.isRequired,
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { create } = this.props;
    create({ name });
  };

  render() {
    const { name } = this.state;
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="enter your todo name"
        />
      </form>
    );
  }
}

export default CreateTodo;
