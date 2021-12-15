// 检测指定值的构造函数的 prototype 属性是否出现在某个实例对象的原型链上
export default function hasInstance(value: unknown, constructor: () => void) {
  return value instanceof constructor
}
