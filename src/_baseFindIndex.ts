
function baseFindIndex<T>(
  array: T[],
  callback: (currentValue: T, index?: number, array?: T[]) => boolean,
  fromIndex: number,
  fromRight = false
) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)

  while ((fromRight ? index-- : ++index < length)) {
    if (callback(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex