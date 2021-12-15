import { isArrayLike } from '../src/index'
import { symbol, bigInt } from './_utils'

describe('isArrayLike', () => {
  it('is a function', () => {
    expect(isArrayLike).toBeInstanceOf(Function)
  })

  it('Array like return `true`', () => {
    expect(isArrayLike({ 0: 'a', 1: 'b', 2: 'c', length: 3 })).toBe(true)
    expect(isArrayLike('hello')).toBe(true)
    expect(isArrayLike([1, 2, 3])).toBe(true)
    
    const fn = (...args?: any[]): any => arguments
    expect(isArrayLike(fn(1, 2, 3))).toBe(true)
  })

  it('other values return `false`', () => {
    expect(isArrayLike(1)).toBe(false)
    expect(isArrayLike(bigInt)).toBe(false)
    expect(isArrayLike(symbol)).toBe(false)
    expect(isArrayLike(null)).toBe(false)
    expect(isArrayLike(undefined)).toBe(false)

    expect(isArrayLike(new Boolean(true))).toBe(false)
    expect(isArrayLike({ a: 'b' })).toBe(false)
    expect(isArrayLike(new Error())).toBe(false)
    expect(isArrayLike(new Date())).toBe(false)
    expect(isArrayLike(/a/)).toBe(false)
  })
})