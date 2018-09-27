import { combineReducers } from 'redux';
import counter from './counter'
import { page } from '../pages/page/redux/reducer';

export default combineReducers({
  counter,
  page,
})
