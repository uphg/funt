function indexOf(
  array: unknown[],
  value: unknown,
  fromIndex: number = 0
) {
  for (let i = fromIndex; i < array.length; i++) {
    console.log(`第${i + 1}次，index 为：${i}`)
    if(array[i] === value) return i
  }

  return -1
}

export default indexOf