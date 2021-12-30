import { _isFinite, _isNaN } from './_common'

// 判断是否为有限的数字
export default function isFinite(value: unknown) {
  return typeof value === 'number' && _isFinite(value) && !_isNaN(value)
}
