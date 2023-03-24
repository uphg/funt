import { hasOwnProperty } from './internal/common'

function has<T = unknown>(object: T, key: string | number | symbol) {
  return object !== null && object !== void 0 && hasOwnProperty.call(object, key)
}

export default has
