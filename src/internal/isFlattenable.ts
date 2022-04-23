import isArguments from '../isArguments'

// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
const spreadableSymbol = Symbol.isConcatSpreadable

// 判断该值是否可扁平化
function isFlattenable(value: unknown) {
  return Array.isArray(value) || isArguments(value) ||
    !!(value as any)?.[spreadableSymbol]
}

export default isFlattenable
