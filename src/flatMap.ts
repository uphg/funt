import baseFlatten from './internal/baseFlatten'
import { FlattenCallback, RecursiveArray } from './internal/types'

function flatMap<T, U>(array: RecursiveArray<T>, callback: FlattenCallback<T, U>) {
  return baseFlatten<T, U>(array, callback)
}

export default flatMap
