import hasToStringTag from "./_hasToStringTag"

const isArray = (value: unknown) => Array.isArray ? Array.isArray(value) : hasToStringTag(value, 'Array')

export default isArray
