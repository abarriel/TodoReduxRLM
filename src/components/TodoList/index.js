import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

const TodoList = ({ todos, tasks, remove, create, removetask }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        data={todo}
        remove={remove}
        create={create}
        removetask={removetask}
        tasks={tasks.filter(task => task.todoId === todo.id)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TodoList;
