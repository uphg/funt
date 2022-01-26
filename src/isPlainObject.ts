import isObjectLike from './isObjectLike'
import isTag from './_isTag'

const getProto = Object.getPrototypeOf

// 判断是否为普通对象
function isPlainObject(value: unknown) {
  if (!isObjectLike(value) || !isTag(value, 'Object')) {
    return false
  }
  if (getProto(value) === null) {
    return true
  }

  return getProto(value) === Object.prototype
}

export default isPlainObject
