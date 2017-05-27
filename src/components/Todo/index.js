import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import DeleteTodo from '../DeleteTodo';
import CreateTask from '../CreateTasks';

const Todo = ({ data, tasks, remove, create, removetask }) => (
  <li>
    <h4>
      {data.name}
      <DeleteTodo cle={data.id} remove={remove} />
    </h4>
    <ul>
      <CreateTask create={create} cle={data.id} />
      {tasks.map(task => (
        <Task key={task.id} remove={removetask} data={task} />
      ))}
    </ul>
  </li>
);

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Todo;
