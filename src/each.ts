import isArrayLike from './isArrayLike'
import type { ArrayLike } from './interfaces'

// 对数组或对象的每一项执行一次给定的函数
export default function each<T>(
  obj: { [key: string]: T } | ArrayLike<T> | Array<T>,
  callback: (
    currentValue?: T,
    index?: number | string,
    obj?: { [key: string]: T } | ArrayLike<T> | Array<T>
  ) => any
) {
  if (isArrayLike(obj)) {
    const length = obj.length
    for (let i = 0; i < length; i++) {
      callback((obj as ArrayLike<T>)[i], i, obj)
    }
  } else {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      const item = keys[i]
      callback((obj as { [key: string]: T })[item], item, obj)
    }
  }

  return obj
}
