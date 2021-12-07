function isObject(value: unknown) {
  if (value === null) return false

  const type = typeof value
  return type === 'object' || type === 'function'
}

export default isObject