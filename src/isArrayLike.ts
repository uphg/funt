import isLength from './isLength'

export default function isArrayLike(value: any) {
  return value !== undefined && value !== null && typeof value !== 'function' && isLength(value.length)
}
