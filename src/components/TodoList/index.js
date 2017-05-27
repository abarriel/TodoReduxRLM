import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

const TodoList = ({ todos, tasks }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        data={todo}
        tasks={tasks.filter(task => task.todoId === todo.id)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodoList;
