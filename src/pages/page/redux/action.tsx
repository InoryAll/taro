/**
 * action
 */
import { createAction } from 'redux-actions';
import {
  CHANGE_STATE
} from './constant';

const changeStateAction = createAction(CHANGE_STATE);

export const doChangeState = (data) => {
  return (dispatch) => {
    dispatch(changeStateAction({ data }));
  };
};
