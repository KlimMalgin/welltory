import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tools from './tools';
import auth from './auth';
import list from './list';

export default combineReducers({
  auth,
  list,
  tools,
  routing: routerReducer
});
