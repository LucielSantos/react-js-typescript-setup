import { combineReducers } from 'redux';

import main from './main';
import login from './login';

export default combineReducers({
  main,
  login,
});
