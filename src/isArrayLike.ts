import isLength from './isLength'

function isArrayLike(value: unknown): value is ArrayLike<unknown> | string {
  return value !== void 0 && value !== null && typeof value !== 'function' && isLength((value as ArrayLike<unknown>).length)
}

export default isArrayLike
