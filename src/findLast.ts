import findLastIndex from './findLastIndex'
import type { FindCallback } from './internal/types'

// 返回通过 if 判断为真的数组（或类数组）的最后一项
function findLast<T>(array: ArrayLike<T>, callback: FindCallback<T>, fromIndex?: number) {
  const index = findLastIndex<T>(array, callback, fromIndex)
  return index === -1 ? void 0 : array[index]
}

export default findLast
