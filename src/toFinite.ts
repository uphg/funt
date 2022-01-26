import toNumber from './toNumber'
import { INFINITY, MAX_INTEGER } from './_common'

// 转有限数字
function toFinite(value: unknown): number {
  if (!value) return value === 0 ? value : 0

  value = toNumber(value)

  if (value === INFINITY || value === -INFINITY) {
    const sign = (value > 0 ? 1 : -1)
    return sign * MAX_INTEGER
  }

  return (value === value ? value : 0) as number
}

export default toFinite
