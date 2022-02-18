function compact<T>(array: T[]) {
  let resIndex = 0
  const result: T[] = []

  if (array === null || array === void 0) return result

  for (const item of array) {
    if (item) {
      result[resIndex++] = item
    }
  }

  return result
}

export default compact
