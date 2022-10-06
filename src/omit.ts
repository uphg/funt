import baseOmit from './internal/baseOmit'
import isNil from './isNil'
import { Key } from './internal/interfaces'

function omit(object: any, excludes: Key[]) {
  return isNil(object) ? {} : baseOmit(object, excludes)
}

export default omit
