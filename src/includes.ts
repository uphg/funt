import eq from './eq'

function includes<T>(array: T[] | undefined, value: T) {
  const length = array?.length
  if (!length) return false
  let index = -1
  while (++index < length) {
    if (eq(array[index], value)) {
      return true
    }
  }

  return false
}

export default includes
