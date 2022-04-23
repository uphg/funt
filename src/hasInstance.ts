import type { ConstructorType } from './internal/interfaces'

// 检测指定值的构造函数的 prototype 属性是否出现在某个实例对象的原型链上
function hasInstance(value: unknown, constructor: ConstructorType) {
  return value instanceof constructor
}

export default hasInstance
