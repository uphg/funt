import isPrototype from './_isPrototype'

export default function initCloneObject(value: object) {
  return (typeof value.constructor === 'function' && !isPrototype(value))
    ? Object.create(Object.getPrototypeOf(value))
    : {}
}
