import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import tools from './tools';
import auth from './auth';

export default combineReducers({
  auth,
  tools,
  form: formReducer,
  routing: routerReducer
});
