import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTask extends Component {
  state = {
    name: '',
  };
  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  static PropTypes = {
    create: PropTypes.func.isRequired,
    key: PropTypes.object.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    console.log(this.props);
    const { create, cle } = this.props;
    console.log(cle);
    create({ name, todoId: cle });
  };
  render() {
    const { name } = this.state;
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Entre your task name"
          value={name}
        />
      </form>
    );
  }
}
export default CreateTask;
