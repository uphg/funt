import { MAX_SAFE_INTEGER } from './_common'

// 检测无符号的整数
const reIsUint = /^(?:0|[1-9]\d*)$/

// 检测是否为 数组或类数组的 index 索引，length 表示长度
function isIndex(value: any, length: any) {
  const type = typeof value
  length = (length === null || length === void 0) ? MAX_SAFE_INTEGER : length
  return !!length
    && (type === 'number' || (type !== 'symbol' && reIsUint.test(value)))
    && (value > -1 && value % 1 == 0 && value < length)
}

export default isIndex
