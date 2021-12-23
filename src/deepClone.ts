import baseClone from './_baseClone'

function deepClone(value: unknown, count?: any) {
  return baseClone(value, count)
}

export default deepClone
