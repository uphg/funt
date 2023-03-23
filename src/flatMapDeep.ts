import baseFlatten from './internal/baseFlatten'
import { FlattenCallback } from './types'

function flatMapDeep<T, U>(array: T[], callback: FlattenCallback<T, U>) {
  return baseFlatten<T, U>(array, callback, true)
}

export default flatMapDeep
