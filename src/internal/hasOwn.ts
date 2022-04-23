import { hasOwnProperty } from './common'
import type { ObjectConstructorNext } from './interfaces'

function hasOwn(obj: unknown, key: string | symbol) {
  return obj !== null && obj !== void 0 && hasOwnProperty.call(obj, key)
}

export default (Object as ObjectConstructorNext).hasOwn || hasOwn
