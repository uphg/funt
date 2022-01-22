import toInteger from "./toInteger"
import isNaN from "./isNaN"
import baseLastIndexOf from './_baseLastIndexOf'
import baseFindIndex from "./_baseFindIndex"

// 返回数组中某项最后一次出现的位置
export default function lastIndexOf<T>(
  array: T[] = [],
  value: T,
  fromIndex?: number
) {
  const length = array.length
  if (!length) {
    return -1
  }
  let index = length
  if (fromIndex) {
    index = toInteger(fromIndex)
    index = index < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }

  return value === value ? baseLastIndexOf(array, value, index) : baseFindIndex<T>(array, isNaN, index, true)
}
