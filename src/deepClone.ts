import isArray from './isArray'
import isObjectLike from './isObjectLike'

function deepClone(value: unknown) {
  if (
    value === undefined
    || value === null
    || typeof value === 'string'
    || typeof value === 'boolean'
    || typeof value === 'number'
    || typeof value === 'bigint'
    || typeof value === 'symbol'
    || typeof value === 'symbol'
  ) {
    return value
  }
  let dist: {[key: string]: any} | null = null
  if (typeof value === 'object' && value !== null) {
    if (isArray(value)) {
      dist = []
    } else if (isObjectLike(value)) {
      dist = {}
    }

    for (const item in value) {
      if (Object.prototype.hasOwnProperty.call(value, item)) {
        (dist as {[key: string]: any})[item] = (value as {[key: string]: any})[item]
      }
    }
  }

  return dist
}

export default deepClone