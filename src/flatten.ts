import baseFlatten from './internal/baseFlatten'
import { RecursiveArrayLike } from './internal/types'

function flatten<T>(array: RecursiveArrayLike<T>) {
  return array?.length ? baseFlatten<T, T | RecursiveArrayLike<T>>(array, (item) => item) : []
}

export default flatten
