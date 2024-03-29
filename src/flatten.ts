import baseFlatten from './internal/baseFlatten'
import { RecursiveArray } from './types'

function flatten<T>(array: T[]) {
  return array?.length ? baseFlatten<T, T | RecursiveArray<T>>(array, (item) => item) : []
}

export default flatten
