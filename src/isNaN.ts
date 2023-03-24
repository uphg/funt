import { _isNaN } from './internal/common'
import isNumber from './isNumber'

function isNaN(value: unknown): boolean {
  return isNumber(value) && _isNaN(value as number)
}

export default Number.isNaN ?? isNaN
