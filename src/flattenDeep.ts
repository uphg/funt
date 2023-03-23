import baseFlatten from './internal/baseFlatten'
import { RecursiveArray } from './types'

function flattenDeep<T>(array: Array<RecursiveArray<T>>) {
  return array?.length ? baseFlatten<T, RecursiveArray<T>>(array, (item: RecursiveArray<T>) => item, true) : []
}

export default flattenDeep
