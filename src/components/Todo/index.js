import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

const Todo = ({ data, tasks }) => (
  <li>
    <h4>{data.name}</h4>
    <ul>
      {tasks.map(task => <Task key={task.id} data={task} />)}
    </ul>
  </li>
);

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default Todo;
