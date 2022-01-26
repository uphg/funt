import isPrototype from './_isPrototype'

function initCloneObject(value: object) {
  return (typeof value.constructor === 'function' && !isPrototype(value))
    ? Object.create(Object.getPrototypeOf(value))
    : {}
}

export default initCloneObject
