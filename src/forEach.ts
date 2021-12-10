import isArrayLike from "./isArrayLike"
import type { ArrayLike } from './interfaces'


function forEach(
  object: { [key: string]: any },
  iteratee: (
    currentValue: any,
    currentIndex: any,
    listObj: any
  ) => any
) {
  if (isArrayLike(object)) {
    const length = (object as ArrayLike<any>).length
    for (let i = 0; i < length; i++) {
      iteratee((object as ArrayLike<any>)[i], i, object)
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