
import { 
    GET_LIST,
    GET_LIST_FAIL,
    GET_LIST_SUCCESS
    } from '../constants/list';

import { list } from '../api/rest';

export function getList () {
    return function (dispatch) {
        dispatch({
            type: GET_LIST
        });
        
        list().then(function (response) {
            debugger;
            dispatch({
                type: GET_LIST_SUCCESS, 
                payload: response.body
            })
        }).catch(function (/*err*/) {
            dispatch({
                type: GET_LIST_FAIL,
                payload: null
            })
        });
    };
}
