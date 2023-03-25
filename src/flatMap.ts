import baseFlatten from './internal/baseFlatten'
import { FlattenCallback, RecursiveArrayLike } from './internal/types'

function flatMap<T, U>(array: RecursiveArrayLike<T>, callback: FlattenCallback<T, U>) {
  return baseFlatten<T, U>(array, callback)
}

export default flatMap
