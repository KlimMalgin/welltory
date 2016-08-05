
import { 
    GET_CSRF,
    GET_CSRF_FAIL,
    GET_CSRF_SUCCESS,
    
    SIGNIN,
    SIGNIN_FAIL,
    SIGNIN_SUCCESS
    } from '../constants/auth';

import { csrf, signin as postSignin } from '../api/rest';

export function getCsrf() {
    return function (dispatch) {
        dispatch({
            type: GET_CSRF
        });
        
        csrf().then(function (response) {
            debugger;
            dispatch({
                type: GET_CSRF_SUCCESS, 
                payload: JSON.parse(response.body)
            })
        }).catch(function (/*err*/) {
            dispatch({
                type: GET_CSRF_FAIL,
                payload: null
            })
        });
    };
}

export function signin (email, pwd) {
    return function (dispatch) {
        dispatch({
            type: SIGNIN
        });
        
        postSignin(email, pwd).then(function (response) {
            debugger;
            dispatch({
                type: SIGNIN_SUCCESS, 
                payload: JSON.parse(response.body)
            })
        }).catch(function (/*err*/) {
            dispatch({
                type: SIGNIN_FAIL,
                payload: null
            })
        });
    };
}
