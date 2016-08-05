

export function each (func) {
    Object.keys(this).forEach((key, index) => func(this[key], key, index));
}

export function map (func) {
    return Object.keys(this).forEach((key, index) => func(this[key], key, index));
}

