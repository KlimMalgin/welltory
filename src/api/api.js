
import transport from './transport';
import { endpoints } from '../config';


/**
 * Вернет дынные пользователя по userId
 */
export function user (userId) {
    return transport(endpoints.user, { userId: userId });
}
