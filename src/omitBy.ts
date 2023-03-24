import baseOmitBy from './internal/baseOmitBy'
import { Key } from './internal/types'
import isNil from './isNil'

function omitBy(object: unknown, callback: (value: unknown, key: Key) => boolean) {
  return isNil(object) ? {} : baseOmitBy(object, callback)
}

export default omitBy
