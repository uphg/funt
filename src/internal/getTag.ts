function getTag(value: unknown) {
  return Object.prototype.toString.call(value)
}

export default getTag
