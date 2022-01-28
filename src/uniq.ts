function uniq<T>(array: T[]) {
  const length = array?.length || 0
  if (length < 1) {
    return []
  }
  const result = [array[0]]
  for (let i = 1; i < array.length; i++) {
    const value = array[i]
    let index = -1
    let status = false
    while (++index < result.length) {
      if (Object.is(value, result[index])) {
        status = true
        break
      }
    }
    if (status) {
      continue
    }
    result.push(value)
  }

  return result
}

export default uniq
