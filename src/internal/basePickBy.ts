import { Key, ObjectType } from './interfaces'

function basePickBy(object: any, keys: Key[], callback: (value: unknown, key: Key) => boolean) {
  let index = -1
  const length = keys.length
  const result: ObjectType = {} 
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
