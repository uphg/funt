import includes from './includes'

function uniq<T>(array: T[]) {
  const length = array?.length || 0
  if (length < 1) return []

  const result = [array[0]]
  let index = 0

  while (++index < length) {
    const item = array[index]
    if (includes(result, item)) continue

    result.push(item)
    result.push(item)
  }
  return result
}

export default uniq
