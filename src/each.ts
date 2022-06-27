import isArrayLike from './isArrayLike'
import type { ObjectLike, ArrayLike } from './internal/interfaces'
import keys from './keys'

// 对数组或对象的每一项执行一次给定的函数
function each<T>(
  obj: ObjectLike<T> | ArrayLike<T> | Array<T>,
  callback: (
    currentValue: T,
    index: number | string,
    obj?: ObjectLike<T> | ArrayLike<T> | Array<T>
  ) => unknown
) {
  if (isArrayLike(obj)) {
    const length = obj.length
    for (let i = 0; i < length; i++) {
      callback(obj[i], i, obj)
    }
  } else {
    const _keys = keys(obj)
    for (let i = 0; i < _keys.length; i++) {
      const key = _keys[i] as unknown as number 
      callback(obj[key], key, obj)
    }
  }

  return obj
}

export default each
