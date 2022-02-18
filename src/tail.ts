function tail<T>(array: T[]) {
  if (!array?.length) {
    return []
  }

  const [, ...result] = array
  return result
}

export default tail
