import isArray from "./isArray"
/**
 * 生成 findIndex 与 findLastIndex 函数
 * @param direction 遍历方向
 * @returns 
 */
const createPredicateIndexFinder = (direction = 'first') => {
  const back = direction === 'last'
  
  return (collection, predicate, fromIndex = 0) => {
    if (!isArray(collection)) return -1
    
    for (let i = fromIndex; i < collection.length; i++) {
      console.log(`第${i + 1}次`)
      const index = back ? collection.length - i - 1 : i
      if (predicate(collection[index], index, collection)) {
        return i
      }
    }
    return -1
  }
}

export default createPredicateIndexFinder