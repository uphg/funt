import baseFlatten from './internal/baseFlatten'

function flattenDeep<T>(array: T[]) {
  return (array ? array.length : 0) ? baseFlatten<T>(array, (item: T) => item, true) : []
}

export default flattenDeep
