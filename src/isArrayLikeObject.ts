import isObjectLike from './isObjectLike'
import isArrayLike from './isArrayLike'

export default function isArrayLikeObject(value: any) {
  return isObjectLike(value) && isArrayLike(value)
}
