function isInteger(value: unknown) {
  return typeof value ==='number' && value % 1 === 0
}

export default isInteger
