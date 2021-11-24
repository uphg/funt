const typeTester = (value, name) => {
  return Object.prototype.toString.call(value) === `object ${name}`
}

export default typeTester
