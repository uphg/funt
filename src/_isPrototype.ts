const objectProto = Object.prototype

// 判断是否为原型
// isPrototype(Object.prototype)
// // => true
// isPrototype(Array.prototype)
// // => true
export default function isPrototype(value: any) {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto

  return value === proto
}
