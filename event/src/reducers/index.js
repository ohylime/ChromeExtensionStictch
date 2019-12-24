import {combineReducers} from 'redux';

import count from './count';
import petState from './petState'

export default combineReducers({
  count,
  petState
});
