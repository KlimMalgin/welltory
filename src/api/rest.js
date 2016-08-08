
import transport from './transport';
import { config, endpoints } from '../config';


/**
 * Вернет дынные пользователя по userId
 */
/*export function user (userId) {
    return transport(endpoints.user, { userId: userId });
}*/

export function csrf () {
    return transport(endpoints.csrf);
}

export function signin (email, pwd) {
    return transport(
        endpoints.signin, 
        { // params
            method: 'POST'
        }, 
        { // body
            email: email, password: pwd 
        },
        { // headers
            'X-CSRFToken': config.csrf
        }
    );
}

export function profile () {
    return transport(
        endpoints.profile,
        {},{},
        { // headers
            'X-CSRFToken': config.csrf
        });
}

export function list () {
    return transport(
        endpoints.list,
        {},{},
        { // headers
            'X-CSRFToken': config.csrf
        }
    );
}
