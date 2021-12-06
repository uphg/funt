import isBoolean from '../src/isBoolean'
import { symbol, bigInt } from './_utils'

describe('isBoolean', () => {
  it('is a function ', () => {
    expect(isBoolean).toBeInstanceOf(Function);
  })
  
  it('boolean values return `true`', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  })

  it('other values return `false`', () => {
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean('a')).toBe(false)
    expect(isBoolean(bigInt)).toBe(false)
    expect(isBoolean(symbol)).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
    expect(isBoolean({ a: 'b' })).toBe(false)
    expect(isBoolean([1, 2, 3])).toBe(false)
    expect(isBoolean(new Error())).toBe(false)
    expect(isBoolean(new Date())).toBe(false)
    expect(isBoolean(/a/)).toBe(false)
  })
})
