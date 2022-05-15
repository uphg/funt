import { Keys, Key, ObjectType } from './interfaces'

function basePickBy(obj: unknown, keys: Keys, callback: (value: unknown, key: Key) => boolean) {
  let index = -1
  const length = keys.length
  const result: ObjectType = {} 
  while (++index < length) {
    const key = keys[index]
    const value = (obj as ObjectType)[key]
    if (callback(value, key)) {
      result[key] = value
    }
  }
  return result
}

export default basePickBy
