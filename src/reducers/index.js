import { combineReducers } from 'redux';
import todos from './todos';
import tasks from './tasks';

const rootReducer = combineReducers({
  todos,
  tasks,
});

export default rootReducer;
