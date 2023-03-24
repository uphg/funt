import type { FindCallback } from './types'

function baseFindIndex<T>(array: T[], callback: FindCallback<T>, fromIndex: number, fromRight = false) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)

  while ((fromRight ? index-- : ++index < length)) {
    if (callback(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex
