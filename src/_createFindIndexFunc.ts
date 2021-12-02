import isArray from "./isArray"

type FindIndexCollection = Array<unknown>

export interface FindIndexPredicate {
  (collectionItem: any, index: number, collection: FindIndexCollection): boolean
}

/**
 * 生成 findIndex 与 findLastIndex 函数
 * @param direction 遍历方向
 * @returns {Function} 返回一个 findIndex 函数 
 */

function createFindIndexFunc(direction = 'first') {
  const back = direction === 'last'
  return function (
    collection: FindIndexCollection,
    predicate: FindIndexPredicate,
    fromIndex = 0
  ) {
    if (!isArray(collection)) return -1
    
    for (let i = fromIndex; i < collection.length; i++) {
      const index = back ? collection.length - i - 1 : i
      if (predicate(collection[index], index, collection)) {
        return i
      }
    }
    return -1
  }
} 

export default createFindIndexFunc