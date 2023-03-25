import isFlattenable from './isFlattenable'
import baseFlattenDeep from './baseFlattenDeep'
import type { FlattenCallback, RecursiveArray, RecursiveArrayLike } from './types'

function baseFlatten<T, U>(array: RecursiveArrayLike<T>, callback: FlattenCallback<T, U>, isDeep = false) {
  const length = array?.length || 0
  const result: RecursiveArray<U> = []
  let index = -1

  while (++index < length) {
    const item = callback(array[index], index, array)
    if (isFlattenable(item)) {
      isDeep
        ? result.push(...baseFlattenDeep(item as RecursiveArray<U>))
        : result.push(...(item as RecursiveArray<U>))
    } else {
      result.push(item)
    }
  }
  return result
}

export default baseFlatten
