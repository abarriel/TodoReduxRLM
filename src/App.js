import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import allActions from './actions';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

const App = ({ todos, tasks, actions }) => (
  <div className="App">
    <CreateTodo create={actions.todos.create} />
    <TodoList
      todos={todos}
      tasks={tasks}
      remove={actions.todos.remove}
      create={actions.tasks.create}
      removetask={actions.tasks.remove}
    />
  </div>
);

const mapStateToProps = ({ todos, tasks }) => ({
  todos,
  tasks,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    todos: bindActionCreators(allActions.todos, dispatch),
    tasks: bindActionCreators(allActions.tasks, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
