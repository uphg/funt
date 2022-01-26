import isLength from './isLength'

function isArrayLike(value: any) {
  return value !== void 0 && value !== null && typeof value !== 'function' && isLength(value.length)
}

export default isArrayLike
