import { _isNaN } from './_common'
import isNumber from './isNumber'

export default function isNaN(value: unknown): boolean {
  return isNumber(value) && _isNaN(value as number)
}
