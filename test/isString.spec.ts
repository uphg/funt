import isString from '../src/isString'
import { symbol, bigInt } from './_utils'

describe('isString', () => {
  it('is a function', () => {
    expect(isString).toBeInstanceOf(Function)
  })

  it('string values return `true`', () => {
    expect(isString('')).toBe(true)
    expect(isString('hi')).toBe(true)
  })

  it('other values return `false`', () => {
    expect(isString(true)).toBe(false)
    expect(isString(1)).toBe(false)
    expect(isString(bigInt)).toBe(false)
    expect(isString(symbol)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString({ a: 'b' })).toBe(false)
    expect(isString([1, 2, 3])).toBe(false)
    expect(isString(new Error())).toBe(false)
    expect(isString(new Date())).toBe(false)
    expect(isString(/a/)).toBe(false)
  })
})