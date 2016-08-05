

/**
 * Вернет название url-параметра по указанному номеру. Если номер не указан - будет взят параметр по номеру 1.
 * Метод должен быть вызван в контексте компонента Component::currentRoute()
 * @params {Number} urlParamIndex Номер параметра в url, который нужно получить. По умолчанию 1.
 * @return {String} Наименование параметра из url
 */
export function currentRoute (urlParamIndex = 1) {
    return this.props.location.pathname.split('/')[urlParamIndex] || '';
}
