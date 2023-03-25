import baseFlatten from './internal/baseFlatten'
import { RecursiveArrayLike } from './internal/types'

function flattenDeep<T>(array: RecursiveArrayLike<T>) {
  return array?.length ? baseFlatten<T, T | RecursiveArrayLike<T>>(array, (item) => item, true) : []
}

export default flattenDeep
