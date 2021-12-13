/**
 * 生成 findIndex 与 findLastIndex 函数
 * 
 * @private
 * @since 0.1.0
 * @param {boolean} isLast 是否从最后开始遍历
 * @returns {Function} 返回一个 findIndex 函数 
 * @example
 * 
 * createFindIndexFunc()
 * // => (array, predicate, fromIndex) => number
 */
function createFindIndexFunc(isLast = false) {
  return function <T> (
    array: T[],
    callback: (currentValue: T, index: number, array: T[]) => boolean,
    fromIndex = isLast ? array.length - 1 : 0
  ) {
    if (!Array.isArray(array)) return -1
    
    for (let i = 0; i < array.length; i++) {
      const index = isLast ? fromIndex - i : i
      if (callback(array[index], index, array)) {
        return isLast ? index : i
      }
    }
    return -1
  }
} 

export default createFindIndexFunc