
import xhr from 'xhr'
import cfg from '../config'

/**
 * Выполнит запрос к серверу в соответствии с 
 * текущей конфигурацией и заданными параметрами
 */
export default function transport (endpoint, params = {}, body = {}, headers = {}) {
    let method = params.method || 'GET';
    let defer = new Promise(function (resolve, reject) {
        xhr({
            method: method,
            uri: method == 'GET' 
                    ? cfg.server + cfg.api.url + endpoint + getParams(params || {}) 
                    : cfg.server + cfg.api.url + endpoint,
            json: method == 'GET' ? undefined : body,
            headers: headers
        }, function (err, response) {
            if (!err) {
                resolve(response);
            } else {
                reject(err);
            }
        });
    });
    return defer;
}

/**
 * Преобразует json-объект в строку get-параметров
 */
function getParams(params) {
    let result = '';
    Object.keys(params).forEach(function (key, index) {
        result += `${index > 0 ? '&' : ''}args[${index}]=${params[key]}`;
    });
    return result.length > 0 ? '?' + result : '';
}
