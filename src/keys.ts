import { hasOwnProperty } from './internal/common'

function _keys(object: any) {
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

// @ts-ignore
export default Object.keys ? keys : _keys
