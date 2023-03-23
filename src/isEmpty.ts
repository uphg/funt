import { hasOwnProperty } from './internal/common'
import getObjectTag from './internal/getObjectTag'
import isArguments from './isArguments'
import isArray from './isArray'

function isEmpty<T extends unknown>(value: T): value is T {
  if (value === void 0 || value === null) {
    return true
  }

  if (isArray(value) || typeof value === 'string' || isArguments(value)) {
    return !(value as Array<unknown>).length
  }

  const tag = getObjectTag(value)

  if (tag === '[object Map]' || tag === '[object Set]') {
    return !(value as unknown as (Map<unknown, unknown> | Set<unknown>)).size
  }

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }

  return true
}

export default isEmpty
