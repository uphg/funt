import baseFlatten from './_baseFlatten'

function flatten<T>(array: T[]) {
  return array?.length ? baseFlatten<T>(array, (item: T) => item) : []
}

export default flatten
