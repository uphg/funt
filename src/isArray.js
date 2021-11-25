import toStringTag from "./_toStringTag"

const isArray = (value) => Array.isArray ? Array.isArray(value) : toStringTag('Array')

export default isArray
