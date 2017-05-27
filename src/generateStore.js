import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const initialState = {
  todos: [
    {
      id: 1,
      name: 'my first todo',
    },
    {
      id: 2,
      name: 'my second todo',
    },
    {
      id: 3,
      name: 'my third todo',
    },
  ],
  tasks: [
    {
      id: 1,
      todoId: 1,
      name: 'my first task',
    },
    {
      id: 2,
      todoId: 1,
      name: 'my first task',
    },
    {
      id: 3,
      todoId: 3,
      name: 'my first task',
    },
  ],
};

const generateStore = () =>
  createStore(rootReducer, initialState, applyMiddleware(logger));

export default generateStore;
