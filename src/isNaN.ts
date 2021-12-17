import isNumber from './isNumber';
import { _isNaN } from './_common'

export default function isNaN(value: unknown): boolean {
  return Number.isNaN ? Number.isNaN(value) : isNumber(value) && _isNaN(value as number)
}
