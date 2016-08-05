
import { 
    INCREMENT
    } from '../constants/tools';

export function increment() {
    return function (dispatch) {
        dispatch({
            type: INCREMENT,
            payload: true
        });
    };
}
