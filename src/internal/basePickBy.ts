import type { PickByCallback } from './types'

function basePickBy<T extends object>(object: T, keys: Array<keyof T>, callback: PickByCallback<T>) {
  let index = -1
  const length = keys.length
  const result = {} as T
  while (++index < length) {
    const key = keys[index]
    const value = object[key]
    if (callback(value, key)) {
      result[key] = value
    }
  }
  return result
}

export default basePickBy
