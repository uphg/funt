import findIndex from "./findIndex"
import type { FindIndexPredicate } from './_createFindIndexFunc'

/**
 * find 函数
 * 
 * @param {*} collection 要查询的数组
 * @param {*} predicate 每次迭代调用的函数
 * @param {*} fromIndex 搜索的索引
 * @returns {string} 返回满足条件的项
 * @example
 * 
 * splitCapsWord('TheCaseOfThisConversionString')
 * // => 'the-case-of-this-conversion-string'
 * 
 * splitCapsWord('TheCaseOfThisConversionString', '_')
 * // => 'the_case_of_this_conversion_string'
 */
function find(
  collection: Array<unknown>,
  predicate: FindIndexPredicate,
  fromIndex?: number
) {
  const index = findIndex(collection, predicate, fromIndex)
  return index === -1 ? undefined : collection[index]
}

export default find
