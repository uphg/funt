import isArrayLike from './isArrayLike'
import isString from './isString'
import stringToArray from './internal/stringToArray'
import copyArray from './internal/copyArray'
import iteratorToArray from './internal/iteratorToArray'
import getObjectTag from './internal/getObjectTag'
import mapToArray from './internal/mapToArray'
import setToArray from './internal/setToArray'
import values from './values'

const mapTag = '[object Map]'
const setTag = '[object Set]'

/** 内置值引用 */
const symIterator = Symbol.iterator

function toArray(value: any) {
  if (!value) return []
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value as string) : copyArray<unknown>(value as unknown[])
  }

  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]())
  }

  const tag = getObjectTag(value)
  const func = tag === mapTag ? mapToArray : (tag === setTag ? setToArray : values)

  return func(value)
}

export default toArray
