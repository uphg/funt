export interface FindIndexPredicate {
  (arrayItem: unknown, index: number, array: unknown[]): boolean
}

/**
 * 生成 findIndex 与 findLastIndex 函数
 * @param direction 遍历方向
 * @returns {Function} 返回一个 findIndex 函数 
 */
function createFindIndexFunc(isLast = false) {
  return function (
    array: unknown[],
    predicate: FindIndexPredicate,
    fromIndex = isLast ? array.length - 1 : 0
  ) {
    if (!Array.isArray(array)) return -1
    
    for (let i = 0; i < array.length; i++) {
      const index = isLast ? fromIndex - i : i
      if (predicate(array[index], index, array)) {
        return isLast ? index : i
      }
    }
    return -1
  }
} 

export default createFindIndexFunc