
import { 
    GET_CSRF,
    GET_CSRF_FAIL,
    GET_CSRF_SUCCESS,
    
    GET_PROFILE,
    GET_PROFILE_FAIL,
    GET_PROFILE_SUCCESS,
    
    SIGNIN,
    SIGNIN_FAIL,
    SIGNIN_SUCCESS
    } from '../constants/auth';

import { csrf, profile, signin as postSignin } from '../api/rest';
import { push } from 'react-router-redux';


export function getProfile(dispatch) {
    dispatch({
        type: GET_PROFILE
    });
    
    profile()
        .then((response) => {
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: JSON.parse(response.body)
            });
        })
        .catch(() => {
            console.log('profile fail');
            dispatch({
                type: GET_PROFILE_FAIL
            });
        });    
}

export function getCsrf() {
    return function (dispatch) {
        dispatch({
            type: GET_CSRF
        });
        
        csrf().then(function (response) {
            dispatch({
                type: GET_CSRF_SUCCESS, 
                payload: response.body
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
            dispatch({
                type: SIGNIN_SUCCESS, 
                payload: response.body
            }).then(() => dispatch(push('/list')))
        }).catch(function (/*err*/) {
            dispatch({
                type: SIGNIN_FAIL,
                payload: null
            })
        });
    };
}
