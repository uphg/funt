import type { ArrayLike } from './interfaces'

export default function map<T>(
  array: ArrayLike<T> | Array<T>,
  callback: (
    currentValue?: T,
    index?: number | string,
    array?: ArrayLike<T> | Array<T>
  ) => unknown
): (number | T)[] {
  const length = array?.length || 0
  const result = new Array(length)

  for (let i = 0; i < length; i++) {
    result[i] = callback(array[i], i, array)
  }

  return result
}