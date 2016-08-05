
import transport from './transport';
import { endpoints } from '../config';


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
    return transport(endpoints.signin, { method: 'POST' }, { email: email, password: pwd });
}