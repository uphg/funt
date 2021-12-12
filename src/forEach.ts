import isArrayLike from "./isArrayLike"
import type { ArrayLike } from './interfaces'


function forEach(
  object: { [key: string]: unknown },
  iteratee: (
    currentValue: unknown,
    currentIndex: unknown,
    listObj: unknown
  ) => unknown
) {
  if (isArrayLike(object)) {
    const length = (object as unknown as ArrayLike<unknown>).length
    for (let i = 0; i < length; i++) {
      iteratee((object as unknown as ArrayLike<unknown>)[i], i, object)
    }
    
    return object
  } else {
    const keys = Object.keys(object)
    for (let i = 0; i < keys.length; i++) {
      const item = keys[i]
      iteratee(object[item], item, object)
    }
    return object
  }
  
}

export default forEach