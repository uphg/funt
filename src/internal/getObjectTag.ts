function getObjectTag(value: unknown) {
  return Object.prototype.toString.call(value)
}

export default getObjectTag
