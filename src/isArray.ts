import hasToStringTag from "./_hasToStringTag"

function isArray(value: unknown) {
  return Array.isArray ? Array.isArray(value) : hasToStringTag(value, 'Array')
}

export default isArray
