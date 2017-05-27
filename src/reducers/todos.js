import { CREATE_TODO, REMOVE_TODO } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};
