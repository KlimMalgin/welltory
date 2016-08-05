import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import tools from './tools';

export default combineReducers({
  tools,
  form: formReducer,
  routing: routerReducer
});
