import hasToStringTag from "./_hasToStringTag"

const isArray = (value) => Array.isArray ? Array.isArray(value) : hasToStringTag('Array')

export default isArray
