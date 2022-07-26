import { hasOwnProperty } from './internal/common'
import getTag from './internal/getTag'
import isArguments from './isArguments'
import isArray from './isArray'

function isEmpty(value: any) {
  if (value === void 0 || value === null) {
    return true
  }

  if (isArray(value) || typeof value === 'string' || isArguments(value)) {
    return !value.length
  }

  const tag = getTag(value)

  if (tag === '[object Map]' || tag === '[object Set]') {
    return !value.size
  }

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }

  return true
}

export default isEmpty
