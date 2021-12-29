import { _isInteger } from './_common';

export default function isInteger(value: unknown) {
  return _isInteger ? _isInteger(value) : (typeof value ==='number' && value % 1 === 0)
}
