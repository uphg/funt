import findIndex from './findIndex'

// 返回通过 if 判断为真的数组（或类数组）的第一项
export default function find<T>(
  array: Array<T>,
  callback: (currentValue: T, index: number, array: T[]) => boolean,
  fromIndex?: number
) {
  const index = findIndex<T>(array, callback, fromIndex)
  return index === -1 ? void 0 : array[index]
}
