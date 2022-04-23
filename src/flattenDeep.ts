import baseFlatten from './internal/baseFlatten'

function flattenDeep<T>(array: T[]) {
  return array?.length ? baseFlatten<T>(array, (item: T) => item, true) : []
}

export default flattenDeep
