import isArrayLike from './isArrayLike'

// 生成 findIndex 与 findLastIndex 函数
export default function createFindIndexFunc(isLast = false) {
  return function <T>(
    array: T[],
    callback: (currentValue: T, index: number, array: T[]) => boolean,
    fromIndex = isLast ? array.length - 1 : 0
  ) {
    if (!isArrayLike(array)) return -1
    
    for (let i = 0; i < array.length; i++) {
      const index = isLast ? fromIndex - i : i
      if (callback(array[index], index, array)) {
        return isLast ? index : i
      }
    }
    return -1
  }
}
