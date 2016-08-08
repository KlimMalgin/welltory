import { 
    GET_LIST_SUCCESS
    } from '../constants/list';

const initialState = {
  
  list: {}
  
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case GET_LIST_SUCCESS:
      debugger; 
      return { ...state, list: action.payload };

    default: 
        return state;
  }
}
