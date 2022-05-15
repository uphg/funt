import isNil from '../isNil'

// 返回一个布尔值，表示指定的属性是否可枚举（是否可以被 for...in 循环枚举）
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable

// 方法返回一个给定对象自身的所有 Symbol 属性的数组。
const nativeGetSymbols = Object.getOwnPropertySymbols

// 获取当前对象所有可枚举 Symbol key
function getSymbols(object: unknown) {
  if (isNil(object)) {
    return []
  }
  object = Object(object)
  return nativeGetSymbols(object).filter((symbol) => propertyIsEnumerable.call(object, symbol))
}

export default getSymbols
