import { v4 } from 'uuid';
import { CREATE_TASK, REMOVE_TASK } from '../constants';

export const create = task => ({
  type: CREATE_TASK,
  payload: {
    ...task,
    id: v4(),
  },
});

export const remove = id => ({
  type: REMOVE_TASK,
  payload: { id },
});
