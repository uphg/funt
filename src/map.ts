import isArrayLike from './isArrayLike'
import keys from './keys'
import type { Key } from './internal/types'

type MaybeArrayLike<T> = ArrayLike<T> | Array<T>
type MapObject<T> = Record<Key, T> | MaybeArrayLike<T>
type MapCallback<T, U> = (item: T, index: number | string, object: MapObject<T>) => U

function map<T, U>(object: MapObject<T>, callback: MapCallback<T, U>): U[]{
  if (isArrayLike(object)) {
    const length = object?.length || 0
    const result: U[] = new Array(length as number)
    let index = -1

    while (++index < length) {
      result[index] = callback(object[index], index, object)
    }
    return result
  } else {
    const propNames = keys(object)
    const result: U[] = new Array(propNames.length)
    let index = -1

    while (++index < propNames.length) {
      const key = propNames[index]
      result[index] = callback(object[key], key, object)
    }
    return result
  }
  
}

export default map
