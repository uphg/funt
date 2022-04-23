function copyArray<T>(source: ArrayLike<T>, array?: Array<T>) {
  let index = -1
  const length = source.length
  array || (array = new Array(length))
  while (++index < length) {
    array[index] = source[index]
  }

  return array
}

export default copyArray
