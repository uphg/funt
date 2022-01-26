// 获取对象的 key
function keys(object: unknown) {
  return Object.keys(Object(object))
}

export default keys
