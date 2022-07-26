const objectProto = Object.prototype

// 判断是否为原型
// isPrototype(Object.prototype)
// // => true
// isPrototype(Array.prototype)
// // => true
// isPrototype(false)
// // => false
function isPrototype(value: any) {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto // make isPrototype(false) === false

  return value === proto
}

export default isPrototype
