function isNumber(value) {
    return typeof value === 'number';
}

function isString(value) {
    return typeof value === 'string';
}

function isNil(value) {
    return value === undefined || value === null;
}

export { isNil, isNumber, isString };
