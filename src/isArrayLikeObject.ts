import isObjectLike from './isObjectLike'
import isArrayLike from './isArrayLike'

function isArrayLikeObject(value: unknown): value is Record<string | number, unknown> {
  return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject
