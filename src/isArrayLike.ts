import isLength from "./isLength"

function isArrayLike(value: any) {
  return value !== undefined && value !== null && typeof value !== 'function' && isLength(value.length)
}

export default isArrayLike