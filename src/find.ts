import findIndex from "./findIndex"

/**
 * find 函数
 * 
 * @param {Array} array 要查询的数组
 * @param {Function} predicate 每次迭代调用的函数
 * @param {number} fromIndex 搜索的索引
 * @returns {unknown} 返回满足条件的项
 * @example
 * 
 * find([1, 2, 3, 4, 5, 6], (item) => item === 2)
 * // => 2
 * 
 * find([1, 2, 3, 4, 5, 6], (item) => item % 3 === 0)
 * // => 3
 */
function find<T>(
  array: Array<T>,
  callback: (currentValue: T, index: number, array: T[]) => boolean,
  fromIndex?: number
) {
  const index = findIndex<T>(array, callback, fromIndex)
  return index === -1 ? undefined : array[index]
}

export default find
