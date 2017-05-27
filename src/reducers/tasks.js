import { CREATE_TASK, REMOVE_TASK } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};
