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
 * splitCapsWord('TheCaseOfThisConversionString')
 * // => 'the-case-of-this-conversion-string'
 * 
 * splitCapsWord('TheCaseOfThisConversionString', '_')
 * // => 'the_case_of_this_conversion_string'
 */
function find(
  array: Array<unknown>,
  predicate: (arrayItem: unknown, index: number, array: unknown[]) => boolean,
  fromIndex?: number
) {
  const index = findIndex(array, predicate, fromIndex)
  return index === -1 ? undefined : array[index]
}

export default find
