function includes<T>(array: T[] | undefined, value: T) {
  if (!array?.length) return false
  const length = array.length
  let index = -1
  while (++index < length) {
    if (array[index] === value) {
      return true
    }
  }

  return false
}

export default includes