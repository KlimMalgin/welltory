import { 
    SIGNIN,
    SIGNIN_FAIL,
    SIGNIN_SUCCESS,
    GET_PROFILE_SUCCESS
    } from '../constants/auth';

const initialState = {
  
  profile: {},
  
  authorize: false
  
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case SIGNIN:
      return { ...state, progress: true };

    case SIGNIN_SUCCESS:
      return { ...state, authorize: action.payload.success, progress: false };

    case SIGNIN_FAIL:
      return { ...state, progress: false };

    case GET_PROFILE_SUCCESS:
      return { ...state, profile: action.payload };

    default:
        return state;
  }
}
