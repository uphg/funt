import baseFlatten from './_baseFlatten'

function flatten<T>(array: T[]) {
  return (array ? array.length : 0) ? baseFlatten<T>(array, (item: T) => item) : []
}

export default flatten
