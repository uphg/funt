import { hasOwnProperty } from './internal/common'

function _keys<T extends object>(object: T) {
  object = Object(object)
  const result = []
  for (const key in object) {
    if (hasOwnProperty.call(object, key)) {
      result.push(key)
    }
  }
  return result
}

// 获取对象的 key
function keys(object: any) {
  return Object.keys(Object(object))
}

export default Object.keys! ? keys : _keys
