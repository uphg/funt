import { _isFinite, _isNaN } from './_common'

// 判断是否为有限的数字
function isFinite(value: unknown) {
  return typeof value === 'number' && _isFinite(value) && !_isNaN(value)
}

export default Number.isFinite || isFinite
