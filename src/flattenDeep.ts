import baseFlatten from './internal/baseFlatten'
import { RecursiveArray } from './types'

function flattenDeep<T>(array: RecursiveArray<T>) {
  return array?.length ? baseFlatten<T, T | RecursiveArray<T>>(array, (item) => item, true) : []
}

export default flattenDeep
