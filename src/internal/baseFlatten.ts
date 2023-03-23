import isFlattenable from './isFlattenable'
import baseFlattenDeep from './baseFlattenDeep'
import type { FlattenCallback,  RecursiveArray } from '../types'

function baseFlatten<T, U extends unknown>(array: Array<RecursiveArray<T>>, callback: FlattenCallback<T, U>, isDeep = false) {
  const length = array?.length || 0
  const result: U[] | Array<RecursiveArray<U>> = []
  let index = -1

  while (++index < length) {
    const item = callback(array[index], index, array)
    if (isFlattenable(item)) {
      isDeep
        ? (result as U[]).push(...baseFlattenDeep(item as Array<RecursiveArray<U>>))
        : (result as Array<RecursiveArray<U>>).push(...(item as Array<RecursiveArray<U>>))
    } else {
      (result as U[]).push(item)
    }
  }
  return result
}

export default baseFlatten
