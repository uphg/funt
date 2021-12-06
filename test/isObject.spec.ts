import isObject from '../src/isObject'

describe('isObject', () => {
  it('is a function', () => {
    expect(isObject).toBeInstanceOf(Function)
  })

  it('object values return `true`', () => {
    const Fn = () => {}

    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(Object(''))).toBe(true)
    expect(isObject(Object(false))).toBe(true)
    expect(isObject(Object(1))).toBe(true)
    expect(isObject(new Date())).toBe(true)
    expect(isObject(new Error())).toBe(true)
    expect(isObject(new Function())).toBe(true)
    expect(isObject(new String('hi'))).toBe(true)
    expect(isObject(new Boolean(true))).toBe(true)
    expect(isObject(new Number(1))).toBe(true)
    expect(isObject(new RegExp('x'))).toBe(true)
    expect(isObject(new Fn())).toBe(true)
  })

  it('ES6+ object values return `true`', () => {
    expect(isObject(new Set())).toBe(true)
    expect(isObject(new WeakSet())).toBe(true)
    expect(isObject(new Map())).toBe(true)
    expect(isObject(new WeakMap())).toBe(true)
  })

})