// const hasOwnProperty = Object.prototype.hasOwnProperty

// function _keys(object: any) {
//   object = Object(object)
//   const result = []
//   for (const key in object) {
//     if (hasOwnProperty.call(object, key)) {
//       result.push(key)
//     }
//   }
//   return result
// }

// 获取对象的 key
function keys(object: any) {
  return Object.keys(Object(object))
}

export default keys
