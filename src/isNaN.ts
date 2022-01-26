import { _isNaN } from './_common'
import isNumber from './isNumber'

function isNaN(value: unknown): boolean {
  return isNumber(value) && _isNaN(value as number)
}

export default isNaN
