import { v4 } from 'uuid';
import { CREATE_TODO, REMOVE_TODO } from '../constants';

export const create = todo => ({
  type: CREATE_TODO,
  payload: {
    ...todo,
    id: v4(),
  },
});

export const remove = id => ({
  type: REMOVE_TODO,
  payload: { id },
});

// export const create = todo => (dispatch) => {
//   axios({
//     url: 'monapig',
//     method: 'POST',
//     data: todo,
//   }).then(({ data }) => dispach(todoCreated(data)));
// }

// store.dispatch(create());
