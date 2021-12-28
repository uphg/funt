import { hasOwnProperty } from './_common'

export default function hasProp(obj: unknown, key: string | symbol) {
  return obj !== null && obj !== void 0 && hasOwnProperty.call(obj, key)
}
