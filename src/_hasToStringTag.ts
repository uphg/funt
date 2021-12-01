const hasToStringTag = (value: unknown, name: string) => {
  return Object.prototype.toString.call(value) === `object ${name}`
}

export default hasToStringTag
