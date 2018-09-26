/**
 * reducer
 */
import { CHANGE_STATE } from './constant';

const initState = {
  data: '',
};

export function page(state = initState, action) {
  switch(action.type) {
    case CHANGE_STATE:
      return { ...state,  ...action.payload};
    default:
      return state;
  }
}
