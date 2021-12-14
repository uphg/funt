import isArrayLike from "./isArrayLike"
import type { ArrayLike } from './interfaces'

/**
 * 对数组或对象的每个元素执行一次给定的函数
 * 
 * @param {ArrayLike | Object} obj 要执行的数组或对象
 * @param {Function} callback 循环处理时要执行的函数
 * @returns {ArrayLike | Object} 返回原对象
 */
function each(
  obj: { [key: string]: unknown } | ArrayLike<unknown> | Array<unknown>,
  callback: (
    currentValue?: unknown,
    index?: unknown,
    obj?: { [key: string]: unknown } | ArrayLike<unknown> | Array<unknown>
  ) => { [key: string]: unknown } | ArrayLike<unknown> | Array<unknown>
) {
  if (isArrayLike(obj)) {
    const length = (obj as unknown as ArrayLike<unknown>).length
    for (let i = 0; i < length; i++) {
      callback((obj as unknown as ArrayLike<unknown>)[i], i, obj)
    }
  } else {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      const item = keys[i]
      callback((obj as { [key: string]: unknown })[item], item, obj)
    }
  }

  return obj
}

export default each