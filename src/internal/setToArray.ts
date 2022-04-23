function setToArray(set: Set<unknown>) {
  let index = -1
  const result = new Array(set.size)

  set.forEach((value) => {
    result[++index] = value
  })
  return result
}

export default setToArray
