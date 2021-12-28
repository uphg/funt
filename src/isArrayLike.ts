import isLength from './isLength'

export default function isArrayLike(value: any) {
  return value !== void 0 && value !== null && typeof value !== 'function' && isLength(value.length)
}
