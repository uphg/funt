function baseLastIndexOf<T>(array: T[], value: unknown, fromIndex: number) {
  let index = fromIndex + 1
  while (index--) {
    if (array[index] === value) {
      return index
    }
  }
  return index
}

export default baseLastIndexOf
