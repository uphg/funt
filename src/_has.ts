import { hasOwnProperty } from './_common'

export default function has(obj: unknown, key: string | symbol) {
  return obj !== null && obj !== void 0 && hasOwnProperty.call(obj, key)
}
