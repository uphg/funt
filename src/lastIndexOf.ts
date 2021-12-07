function lastIndexOf(
  array: unknown[],
  value: unknown,
  fromIndex: number = array.length - 1
) {
  for (let i = fromIndex; i > 0; i--) {
    console.log(`index 为：${i}`)
    if(array[i] === value) return i
  }

  return -1
}

export default lastIndexOf