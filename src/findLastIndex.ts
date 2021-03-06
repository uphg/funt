import toInteger from './toInteger'
import baseFindIndex from './internal/baseFindIndex'

// 返回通过 if 判断为真的数组（或类数组）的第一项的索引

function findLastIndex<T>(
  array: T[],
  callback: (currentValue: T, index?: number, array?: T[]) => boolean,
  fromIndex?: number,
) {
  const length = array?.length

  if (!length) {
    return -1
  }

  let index = length - 1
  if (fromIndex) {
    index = toInteger(fromIndex)
    index = fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1)
  }

  return baseFindIndex(array, callback, index, true)
}

export default findLastIndex
