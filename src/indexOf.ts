function indexOf(
  array: unknown[],
  value: unknown,
  fromIndex: number = 0
) {
  for (let i = fromIndex; i < array.length; i++) {
    if(array[i] === value) return i
  }

  return -1
}

export default indexOf