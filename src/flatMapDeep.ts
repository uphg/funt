import baseFlatten from './internal/baseFlatten'

function flatMapDeep<T>(array: T[], callback: Function) {
  return baseFlatten<T>(array, callback, true)
}

export default flatMapDeep
