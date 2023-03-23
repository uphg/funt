import isFlattenable from './isFlattenable'
import baseFlattenDeep from './baseFlattenDeep'
import type { FlattenCallback,  RecursiveArray } from '../types'

function baseFlatten<T, U extends unknown>(array: RecursiveArray<T>, callback: FlattenCallback<T, U>, isDeep = false) {
  const length = array?.length || 0
  const result: U[] | RecursiveArray<U> = []
  let index = -1

  while (++index < length) {
    const item = callback(array[index], index, array)
    if (isFlattenable(item)) {
      isDeep
        ? (result as U[]).push(...baseFlattenDeep(item as RecursiveArray<U>))
        : (result as RecursiveArray<U>).push(...(item as RecursiveArray<U>))
    } else {
      (result as U[]).push(item)
    }
  }
  return result
}

export default baseFlatten
