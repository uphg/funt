import { MAX_SAFE_INTEGER } from './_common'

function isLength(value: unknown) {
  return typeof value ==='number' && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER
}

export default isLength
