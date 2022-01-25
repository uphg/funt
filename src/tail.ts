function tail<T>(array: T[]) {
  const length = array?.length
  if (!length) {
    return []
  }

  const [, ...result] = array
  return result
}

export default tail
