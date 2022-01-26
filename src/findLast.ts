import findLastIndex from './findLastIndex'

// 返回通过 if 判断为真的数组（或类数组）的最后一项
function findLast<T>(
  array: Array<T>,
  callback: (currentValue: T, index?: number, array?: T[]) => boolean,
  fromIndex?: number
) {
  const index = findLastIndex<T>(array, callback, fromIndex)
  return index === -1 ? void 0 : array[index]
}

export default findLast
