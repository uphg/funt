import type { ConstructorType } from './interfaces'

// 检测指定值的构造函数的 prototype 属性是否出现在某个实例对象的原型链上
export default function hasInstance(value: unknown, constructor: ConstructorType) {
  return value instanceof constructor
}
